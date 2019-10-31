import React, { Component } from 'react'
import SingleAdvertise from './SingleAdvertise'
import mongoose from 'mongoose';
import { IAction, ActionType } from '../framework/IAction';
import { IAdvertiseData, IState, ICommentData } from '../state/appState'
import axios from 'axios';
import { reducerFunctions } from '../reducer/appReducer';
import '../App.css';
import { IWindow } from '../framework/IWindow'

declare let window: IWindow;

interface IProps {
  user?: boolean;
  comment: ICommentData;
};
interface IJSXState { };
export interface IAdvertiseAction extends IAction {
  advertise: IAdvertiseData
}
reducerFunctions[ActionType.create_advertise] = function (newState: IState, action: IAdvertiseAction) {
  newState.BM.advertises.unshift(action.advertise);
  newState.UI.waitingForResponse = false;
  return newState;
}

export default class ShowAllAdvertises extends Component<IProps, IJSXState> {
  constructor(props: any) {
    super(props);
    this.handleCreateAdvertise = this.handleCreateAdvertise.bind(this);
  }
  render() {
    let locationProp = this.props as any;
    // sort from new to old
    window.CS.getBMState().advertises && // if advertises are available ...
    window.CS.getBMState().advertises.sort((a: any,b : any) => Date.parse(b.created_at) - Date.parse(a.created_at));
    
    //render for categories
    const renderCategories = window.CS.getBMState().advertises.filter((item: any) => item.advertise_category === window.CS.getUIState().searchcategory);
    
    //render for searchbar)
    let searchStr = window.CS.getUIState().searchbar.toLowerCase();
    let renderSearchbar = [];
    for (let i = 0; i < window.CS.getBMState().advertises.length; i++) {
        if (window.CS.getBMState().advertises[i].advertise_title.toLowerCase().indexOf(searchStr) !== -1) {
          renderSearchbar.push(window.CS.getBMState().advertises[i]);
        }
    }
    //render for own advertises
    const renderOwnAdds = locationProp.location.pathname === "/showadvertises"
      ?
      window.CS.getBMState().advertises.filter((item: any) => item.advertise_owner === window.CS.getBMState().user.username)
      :
      window.CS.getBMState().advertises;
    //

    if (window.CS.getUIState().loggedIn) { //if user is logged in ...
      if (window.CS.getUIState().searchcategory === "" && window.CS.getUIState().searchbar === "") { // ...and no category and search is selected
        return (
          <div>
            {
              locationProp.location.pathname === "/showadvertises" &&
              <>
                <h1 className="textFromWholeProduct">show all own advertises</h1>
                <p className="textFromWholeProduct">to create a new advertise click this button:&nbsp;
                <button className="createAdvertiseButton" onClick={this.handleCreateAdvertise}>create advertise</button>
                </p>
              </>
            } {/* ==> show all advertises from logged-in-user */}
            <div className="render_showadvertises">
              {renderOwnAdds.map(advertise => <SingleAdvertise key={advertise._id} {...this.props} advertise={advertise} edit={false} />)}
            </div>
          </div>
        )
      } else if (window.CS.getUIState().searchbar === "") {
        /* category is selected, no searchbar */ 
        return (
          <div>
            {
              locationProp.location.pathname === "/showadvertises" &&
              <>
                <h1 className="textFromWholeProduct">show all own advertises</h1>
                <p className="textFromWholeProduct">to create a new advertise click this button:&nbsp;
              <button onClick={this.handleCreateAdvertise}>create advertise</button>
                </p>
              </>
            }
            <h3 className="categoryTitle">{window.CS.getUIState().searchcategory}</h3>
            <div className="render_showadvertises"> {/* ==> show all adds from selected category */}
              {renderCategories.map(advertise => <SingleAdvertise key={advertise._id} {...this.props} advertise={advertise} edit={false} />)}
            </div>
          </div>
        )
      } else {
        /* category is selected but also searchbar */
        return (
        <div>
          {
            locationProp.location.pathname === "/showadvertises" &&
            <>
              <h1 className="textFromWholeProduct">show all own advertises</h1>
              <p className="textFromWholeProduct">to create a new advertise click this button:&nbsp;
        <button onClick={this.handleCreateAdvertise}>create advertise</button>
              </p>
            </>
          }
          <h3 className="categoryTitle">your search: {window.CS.getUIState().searchbar}</h3>
          <div className="render_showadvertises"> {/* ==> show all adds from search */}
            {renderSearchbar.map(advertise => <SingleAdvertise key={advertise._id} {...this.props} advertise={advertise} edit={false} />)}
          </div>
        </div>
        )
      }
    }
    else {
      /* no user ...*/ 
      if (window.CS.getUIState().searchcategory === "" && window.CS.getUIState().searchbar === "") {
        /* ... and no category and searchbar is selected  */
        return (
          <div>
            <h3 className="categoryTitle">All advertises ordered by date</h3>
            <div className="render_showadvertises"> {/* ==> show all advertises */}
              {window.CS.getBMState().advertises.map(advertise => <SingleAdvertise key={advertise._id} {...this.props} advertise={advertise} edit={false} />)}
            </div>
          </div>
        )
      } else if (window.CS.getUIState().searchbar === "") {
        /* category is selected but no search*/ 
        return (
          <div>
            <h3 className="categoryTitle">{window.CS.getUIState().searchcategory}</h3>
            <div className="render_showadvertises"> {/* ==> show all adds from selected category */}
              {renderCategories.map(advertise => <SingleAdvertise key={advertise._id} {...this.props} advertise={advertise} edit={false} />)}
            </div>
          </div>
        )
      } else {
        return (
        <div>
          <h3 className="categoryTitle">your search: {window.CS.getUIState().searchbar}</h3>
          <div className="render_showadvertises"> {/* ==> show all adds from search */}
            {renderSearchbar.map(advertise => <SingleAdvertise key={advertise._id} {...this.props} advertise={advertise} edit={false} />)}
          </div>
        </div>
        )
      }
    }
  }
  handleCreateAdvertise() {
    const uiAction: IAction = {
      type: ActionType.server_called
    }
    window.CS.clientAction(uiAction);
    const newAdvertise: IAdvertiseData = {
      _id: mongoose.Types.ObjectId().toString(),
      advertise_title: "",
      advertise_type: "offer",
      advertise_description: "",
      advertise_category: "---",
      advertise_price: "",
      advertise_owner: window.CS.getBMState().user.username.toString(),
      advertise_pictureUrl: "https://res.cloudinary.com/benb-board/image/upload/v1572432933/benb-board/sale_buijkf.jpg",
      advertise_counter: 0,
      advertise_status: "available",
      advertise_city: "",
    }
    const action: IAdvertiseAction = {
      type: ActionType.create_advertise,
      advertise: newAdvertise
    }
    axios.post('/advertises/add', newAdvertise)
      .then(res => {
        window.CS.clientAction(action);
      });
  }
}
