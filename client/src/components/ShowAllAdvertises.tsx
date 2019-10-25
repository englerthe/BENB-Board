import React, { Component } from 'react'
import SingleAdvertise from './SingleAdvertise'
import mongoose from 'mongoose';
import { IAction, ActionType } from '../framework/IAction';
import { IAdvertiseData, IState } from '../state/appState'
import axios from 'axios';
import { reducerFunctions } from '../reducer/appReducer';
import '../App.css';

import { IWindow } from '../framework/IWindow'
import { userInfo } from 'os';
declare let window: IWindow;

interface IProps {
  user?: boolean
};
interface IJSXState { };
export interface IAdvertiseAction extends IAction {
  advertise: IAdvertiseData
}
reducerFunctions[ActionType.create_advertise] = function (newState: IState, action: IAdvertiseAction) {
  console.log("test", newState.BM.advertises);
  newState.BM.advertises.push(action.advertise);
  newState.UI.waitingForResponse = false;
  return newState;
}

export default class ShowAllAdvertises extends Component<IProps, IJSXState> {
    constructor(props: any) {
        console.log("new App component will be initialized");
        console.log(window.CS.getBMState());
        super(props);
        this.handleCreateAdvertise = this.handleCreateAdvertise.bind(this);
      }
    render() {
      let locationProp = this.props as any;
      const renderAdds = locationProp.location.pathname === "/showadvertises" 
      ?
      window.CS.getBMState().advertises.filter((item: any) => item.owner === window.CS.getBMState().user.username)
      :
      window.CS.getBMState().advertises
      console.log(window.CS.getBMState().user.username);
      console.log(window.CS.getBMState().user.username.toString());
        if (window.CS.getUIState().loggedIn){
          
        return (
          <div>
          {/*{window.CS.getUIState().waitingForResponse.toString()}{window.CS.getUIState().counter}*/}
          {
          locationProp.location.pathname === "/showadvertises" &&
          <>
            <h1 className="textFromWholeProduct">show all own advertises</h1>
            <p className="textFromWholeProduct">to create a new advertise click this button:&nbsp;
              <button onClick={this.handleCreateAdvertise}>create advertise</button>
            </p>
          </>
          }
          <div>
          {renderAdds.map(advertise => <SingleAdvertise key={advertise._id} {...this.props} advertise={advertise} edit={false} />)}
          </div>
        </div>
        )
      }
        else 
        return (
          <div>
          {/*{window.CS.getUIState().waitingForResponse.toString()}{window.CS.getUIState().counter}*/}
          <div>
          {window.CS.getBMState().advertises.map(advertise => <SingleAdvertise key={advertise._id} {...this.props} advertise={advertise} edit={false} />)}
        </div>
      </div>
    )
  }
    handleCreateAdvertise() {
        console.log("handleCreateAdvertise invoked");
        const uiAction: IAction = {
          type: ActionType.server_called
        }
        window.CS.clientAction(uiAction);
        const newAdvertise: IAdvertiseData = {
          _id: mongoose.Types.ObjectId().toString(),
          advertise_title: "",
          advertise_type:"offer",
          advertise_description: "",
          advertise_category: [],
          advertise_price: "",
          advertise_owner: window.CS.getBMState().user.username.toString(),
          advertise_pictureUrl: "",
          advertise_counter: 0,
          advertise_status: "available",
          advertise_city: ""
        }
        const action: IAdvertiseAction = {
          type: ActionType.create_advertise,
          advertise: newAdvertise
        }
        axios.post('/advertises/add', newAdvertise)
        .then(res => {
          window.CS.clientAction(action);
          console.log('test:', res.data)
        });
      }
}
