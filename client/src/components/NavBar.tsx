import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IWindow } from '../framework/IWindow';
import '../App.css';
import { reducerFunctions } from '../reducer/appReducer';
import { ActionType, IAction } from '../framework/IAction';
import { IState } from '../state/appState';

//const logoName = require('../images/benb-logo.jpg')

declare let window: IWindow;

interface IProps {
    searchcategory: string;
}
export interface ISearchCategoryAction extends IAction {
    searchcategory: string;
}
export interface ISearchAction extends IAction {
    searchbar: string;
}
reducerFunctions[ActionType.clear_searchcategory] = function (newState: IState, action: ISearchCategoryAction) {
    newState.UI.searchcategory = action.searchcategory;
    return newState;
}
reducerFunctions[ActionType.update_searchbar] = function (newState: IState, action: ISearchAction) {
    newState.UI.searchbar = action.searchbar;
    return newState;
}
export default class nav extends Component {
    //constructor(props: IProps) {
    //    super(props);
    //}

    clearCategorySearch = (event: any) => {
        const action: ISearchCategoryAction = {
            type: ActionType.clear_searchcategory,
            searchcategory: "",
        };
        this.clearSearch(event);
        window.CS.clientAction(action);
    }
    handleSearchbarChange = (event: any) => {
        const action: ISearchAction = {
            type: ActionType.update_searchbar,
            searchbar: event.target.value,
        }
        window.CS.clientAction(action);
    }
    clearSearch = (event: any) => {
        const action: ISearchAction = {
            type: ActionType.update_searchbar,
            searchbar: "",
        }
        window.CS.clientAction(action);
    }
    clearUser = (event: any) => {
        const loggedoutAction: IAction = {
            type: ActionType.user_logged_out
        }
        window.CS.clientAction(loggedoutAction);
    }

    render() {
        if (window.CS.getUIState().loggedIn) {
            return (
                <nav>
                    <div className="TitleBar">
                        <h2>Buy or Sell something today!</h2>
                        <p>Free listings of your private advertisements, join for free now!</p>
                    </div>
                    <div>
                        <ul>
                            <li><NavLink to="/" onClick={this.clearCategorySearch} >Home</NavLink></li>
                            <div className="nav-search">
                                <NavLink to="/">
                                    <input className="NavBarSearchButton" type="text" name="query" placeholder="Search by title" value={window.CS.getUIState().searchbar} onChange={this.handleSearchbarChange} />
                                    <button className="NavBarSearchButton" onClick={this.clearSearch}>Clear Searchfield</button>
                                </NavLink>
                            </div>
                            <li><NavLink to="/showadvertises" onClick={this.clearCategorySearch} >My advertises</NavLink></li>
                        </ul>
                    </div>
                </nav>
            )
        }
        else {
            return (
                <nav>
                    <div className="TitleBar">
                        <h2>Buy or Sell something today!</h2>
                        <p>Free listings of your private advertisements, join for free now!</p>
                    </div>
                    <div>
                        <ul>
                            <li><NavLink to="/" onClick={this.clearCategorySearch} >Home</NavLink></li>
                            <div className="nav-search">
                                <NavLink to="/">
                                    <input className="NavBarSearchButton" type="text" placeholder="Search by title" value={window.CS.getUIState().searchbar} onChange={this.handleSearchbarChange} />
                                    <button className="NavBarSearchButton" onClick={this.clearSearch}>Clear Searchfield</button>
                                </NavLink>
                            </div>
                            <li><NavLink to="/register" onClick={this.clearUser}>Join us</NavLink></li>
                            <li><NavLink to="/login" onClick={this.clearUser}>Login</NavLink></li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}
