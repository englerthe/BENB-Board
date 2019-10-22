import React from 'react';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Userdetails from './components/Userdetails';
import Login from './components/Login';
import Register from './components/Register';
import ShowAllAdvertises from './components/ShowAllAdvertises';
import { Switch, Route } from 'react-router-dom';
import { IAction, ActionType } from './framework/IAction';
import { IAdvertiseData, IState } from './state/appState'
import axios from 'axios';
import { reducerFunctions } from './reducer/appReducer';

import { IWindow } from './framework/IWindow'
declare let window: IWindow;

interface IProps {
  stateCounter: number
}

export interface IAdvertisesLoadedAction extends IAction {
  advertises: IAdvertiseData[]
}
reducerFunctions[ActionType.server_called] = function (newState: IState, action: IAction) {
  newState.UI.waitingForResponse = true;
  return newState;
}
reducerFunctions[ActionType.add_advertises_from_server] = function (newState: IState, action: IAdvertisesLoadedAction) {
  newState.UI.waitingForResponse = false;
  newState.BM.advertises = action.advertises;
  return newState;
}
export default class App extends React.PureComponent<IProps> {

  componentDidMount() {
    const uiAction: IAction = {
      type: ActionType.server_called
    }
    window.CS.clientAction(uiAction);
    axios.get('/advertises/read').then(response => {
      console.log("this data was loaded as a result of componentDidMount:");
      console.log(response.data);
      const responseAction: IAdvertisesLoadedAction = {
        type: ActionType.add_advertises_from_server,
        advertises: response.data as IAdvertiseData[]
      }
      window.CS.clientAction(responseAction);
    }).catch(function (error) { console.log(error); })
  }

  render() {
    window.CS.log("App --> render()")
    return (
      <div className="container-body">
        <NavBar /> {/* oben  */}
        <div className="container-main-content"> {/* mitte */}
          <div><Categories /></div> {/* mitte links */}
          <Switch>
            <Route path="/showadvertises" component={ShowAllAdvertises} />
            <Route path="/register" component={Register} /> {/* mitte mitte */}

          </Switch>
          <div>
            <Route path="/" component={Login} />
            <Userdetails />
          </div> {/* mitte rechts */}
        </div>
        <div className="footer">Footer</div> {/* unten */}
      </div>
    );
  }

}

