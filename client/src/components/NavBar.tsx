import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IWindow } from '../framework/IWindow';
import { reducerFunctions } from '../reducer/appReducer';
import { ActionType, IAction } from '../framework/IAction';
import { IAdvertiseData, IState } from '../state/appState';

const logoName = require('../images/benb-logo.jpg')
declare let window: IWindow;

interface IProps {
    searchcategory: string;
}
export interface ISearchAction extends IAction {
    searchcategory: string;
}

reducerFunctions[ActionType.update_searchcategory] = function (newState: IState, action: ISearchAction) {
    newState.UI.searchcategory = action.searchcategory;
    return newState;
}
export default class nav extends Component {
    constructor(props: IProps) {
        super(props);
    }
    handleCategorySearch = (event: any) => {
        const action: ISearchAction = {
            type: ActionType.update_searchcategory,
            searchcategory: "",
        }
        console.log(action.searchcategory);
        window.CS.clientAction(action);
    }
    render() {
        if (window.CS.getUIState().loggedIn) {
            return (
                <nav>
                    <div id="showlogo">
                        <img src={logoName} alt="BENB-Board" />
                    </div>
                    <div>
                        <ul>
                            <li><NavLink to="/" onClick={this.handleCategorySearch} >Home</NavLink></li>
                            <div className="nav-search">
                                <form action="/search-advertisements" method="get">
                                    <input type="text" name="title" placeholder="Search an advertisement by title" />
                                    <button type="submit">Search advertisement by title</button>
                                </form>
                            </div>
                            <li><NavLink to="/showadvertises" onClick={this.handleCategorySearch} >Advertises</NavLink></li>
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
                            <li><NavLink to="/" onClick={this.handleCategorySearch} >Home</NavLink></li>
                            <div className="nav-search">
                                <form action="/search-advertisements" method="get">
                                    <input type="text" name="title" placeholder="Search an advertisement by title" />
                                    <button type="submit">Search advertisement by title</button>
                                </form>
                            </div>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}
