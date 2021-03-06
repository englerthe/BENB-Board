import React from 'react';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Login from './components/Login';
import Register from './components/Register';
import ShowAllAdvertises from './components/ShowAllAdvertises';
import { Switch, Route } from 'react-router-dom';
import { IAction, ActionType } from './framework/IAction';
import { IAdvertiseData, IState, ICommentData } from './state/appState'
import axios from 'axios';
import { reducerFunctions } from './reducer/appReducer';
import './App.css';

import { IWindow } from './framework/IWindow'

const copyrightImg = require('./images/C.jpg')
declare let window: IWindow;

interface IProps {
  stateCounter: number
}

export interface IAdvertisesLoadedAction extends IAction {
  advertises: IAdvertiseData[];
  comments: ICommentData[];
}
reducerFunctions[ActionType.server_called] = function (newState: IState, action: IAction) {
  newState.UI.waitingForResponse = true;
  return newState;
}
reducerFunctions[ActionType.add_advertises_from_server] = function (newState: IState, action: IAdvertisesLoadedAction) {
  newState.UI.waitingForResponse = false;
  newState.BM.advertises = action.advertises;
  newState.BM.comments = action.comments;
  return newState;
}
export default class App extends React.PureComponent<IProps> {

  componentDidMount() {
    const uiAction: IAction = {
      type: ActionType.server_called
    }
    window.CS.clientAction(uiAction);
    axios.get('/advertises/read').then(response => {
      console.log("resp:",response.data);
      const responseAction: IAdvertisesLoadedAction = {
        type: ActionType.add_advertises_from_server,
        advertises: response.data[0] as IAdvertiseData[],
        comments: response.data[1] as ICommentData[]
      }
      window.CS.clientAction(responseAction);
    }).catch(function (error) { console.log(error); })
  }
  render() {
    window.CS.log("App --> render()")
    if (window.CS.getUIState().loggedIn) {
    return (
      <div className="container-body">
        <NavBar /> {/* oben  */}
        <div className="container-main-content"> {/* mitte */}
          <div className="container-categories">
            <Categories />
          </div> {/* mitte links */}
          <Switch>
            <Route path="/showadvertises" user={window.CS.getUIState().loggedIn} component={ShowAllAdvertises} />
            <Route path="/register" component={Register} /> {/* mitte mitte */}
            <Route exact={true} path="/" advertise={window.CS.getUIState().searchcategory} component={ShowAllAdvertises} />
          </Switch>
          <div className="container-userdetails">
          <Login />
          </div> {/* mitte rechts */}
        </div>
        <div className="footer"> {/* unten */}
          <img src={copyrightImg} alt="Copyright by BENB" />Copyright by BENB
          </div>
      </div>
    )} else {
      return (
        <div className="container-body">
          <NavBar /> {/* oben  */}
          <div className="container-main-content"> {/* mitte */}
            <div className="container-categories">
              <Categories />
            </div> {/* mitte links */}
            <Switch>
              <Route path="/showadvertises" component={ShowAllAdvertises} />
              <Route path="/register" component={Register} /> {/* mitte mitte */}
              <Route exact={true} path="/" advertise={window.CS.getUIState().searchcategory} component={ShowAllAdvertises} />
            </Switch>
            <div className="container-userdetails">
            <Route path="/login" component={Login} />
            </div> {/* mitte rechts */}
          </div>
          <div className="footer"> {/* unten */}
            <img src={copyrightImg} alt="Copyright by BENB" />Copyright by BENB
            </div>
        </div>
      )}
    ;
  }

}

