import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { IWindow } from '../framework/IWindow';
import { reducerFunctions } from '../reducer/appReducer';
import { IAction, ActionType } from '../framework/IAction';
import { IAdvertiseData, IState } from '../state/appState';
import axios from 'axios';

const logoName = require('../images/benb-logo.jpg')
declare let window: IWindow;

export interface IAdvertiseAction extends IAction {
    advertises: IAdvertiseData []
  }
export interface ISearchAction extends IAction {
    searchbar: string;
  }

reducerFunctions[ActionType.server_called] = function (newState: IState, action: IAction) {
    newState.UI.waitingForResponse = true;
    return newState;
}
reducerFunctions[ActionType.update_searchbar] = function (newState: IState, action: ISearchAction) {
    newState.BM.searchbar=action.searchbar;
    return newState;
}
reducerFunctions[ActionType.search_advertise] = function (newState: IState, action: IAdvertiseAction) {
    newState.UI.waitingForResponse = false;
    newState.BM.advertises = action.advertises;
    return newState;
}

class nav extends React.Component {

    render() {
        if (window.CS.getUIState().loggedIn) {
            return (
                <nav>
                    <div id="showlogo">
                        <img src={logoName} alt="BENB-Board" />
                    </div>
                    <div>
                        <ul>
                            <li></li>
                            <li><NavLink to="/">Home</NavLink></li>
                            <div className="nav-search">
                                    <input type="text" name="title" placeholder="Search an advertise by title"/>
                                    <button type="submit" onClick={this.handleTypeSearch}>Search advertisement by title</button>
                            </div>
                            <li><NavLink to="/showadvertises">Advertises</NavLink></li>
                        </ul>
                    </div>
                </nav>
            )
        }
        else {
            return (
                <nav>
                    <div id="showlogo">
                        <img src={logoName} alt="BENB-Board" />
                    </div>
                    <div>
                        <ul>
                            <li></li>
                            <li><NavLink to="/">Home</NavLink></li>
                            <div className="nav-search">
                                    <input type="text" name="query" placeholder="Search an advertise by title" value={window.CS.getBMState().searchbar} onChange={this.handleTitleChange}/>
                                    <button onClick={this.handleTypeSearch}>Search advertisement by title</button>
                            </div>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                            {/*<li><NavLink to="/showadvertises">Advertises</NavLink></li>*/}
                        </ul>
                    </div>
                </nav>
            )
        }
    }
    
    handleTitleChange = (event: any) => {
        const action: ISearchAction = {
            type: ActionType.update_searchbar,
            searchbar: event.target.value,
        }
        console.log(action.searchbar);
        window.CS.clientAction(action);
    }
    handleTypeSearch = (event: any) =>{
        let history = this.props as any;
        const uiAction: IAction = {
            type: ActionType.server_called
          }
          window.CS.clientAction(uiAction); 
          console.log("searchbar value", window.CS.getBMState().searchbar);
          if (window.CS.getBMState().searchbar ==""){
              if(history.location.pathname === "/register"){
                history.history.push('/');
              }
            console.log("searchbar empty");
          } 
          else {
          axios.get('/advertises/search-advertise/'+window.CS.getBMState().searchbar).then(response => {
            console.log("this data was loaded as a result of searchbar:",  response.data);
            if (!response.data.errorMessage ) {
                const responseAction: IAdvertiseAction = {
                    type: ActionType.search_advertise,
                    advertises: response.data as IAdvertiseData []
                  }
                  window.CS.clientAction(responseAction);
            }
            if(history.location.pathname === "/register" || history.location.pathname === "/login") {
                history.history.push('/');
            }
          }
          ).catch(function (error) { console.log(error); })
        }
    }
}
export default nav;