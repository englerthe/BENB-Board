import React, { Component } from 'react';
import { ActionType, IAction } from '../framework/IAction';
import { IState, IUser } from '../state/appState';
import axios from 'axios';
import { IWindow } from '../framework/IWindow';
import { reducerFunctions } from '../reducer/appReducer';
import { IUserAction } from './Register';
import history from '../framework/history';

declare let window: IWindow;
export interface ISearchAction extends IAction {
    searchcategory: string;
}
export interface IErrorMessage extends IAction {
    errorMessage: string;
}

reducerFunctions[ActionType.login_error] = function (newState: IState, action: IErrorMessage) {
    newState.UI.waitingForResponse = false;
    newState.UI.Login.errorMessage = action.errorMessage;
    return newState
}
reducerFunctions[ActionType.user_logged_in] = function (newState: IState, action: IUserAction) {
    newState.UI.waitingForResponse = false;
    newState.UI.Login.errorMessage = "";
    newState.UI.loggedIn = true;
    newState.BM.user = action.user;
    return newState
}
reducerFunctions[ActionType.user_logged_out] = function (newState: IState, action: IUserAction) {
    newState.UI.waitingForResponse = false;
    newState.UI.Login.errorMessage = "";
    newState.UI.loggedIn = false;

    newState.BM.user = { lastname: "", firstname: "", username: "", password: "", email: "" };
    return newState
}

reducerFunctions[ActionType.update_searchcategory] = function (newState: IState, action: ISearchAction) {
    newState.UI.searchcategory = action.searchcategory;
    newState.UI.searchbar = "";
    return newState;
}    

export default class Login extends Component {
    render() {
        if (window.CS.getUIState().loggedIn)
            return (
                <div className="wholeLogout">
                    <p>Welcome, {window.CS.getBMState().user.username} !</p>
                    <h4>contact informations:</h4>
                    <p>Firstname: {window.CS.getBMState().user.firstname}</p>
                    <p>Lastname: {window.CS.getBMState().user.lastname}</p>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            )
        else
            return (
                <div className="loginFormDiv">
                    <form className="loginFormMain" onSubmit={this.handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input type="username" placeholder="Your username" onChange={this.handleUsernameChange} value={window.CS.getBMState().user.username} />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="********" onChange={this.handlePasswordChange} value={window.CS.getBMState().user.password} />
                        <br />
                        <input type="submit" value="Login" />
                    </form>
                    <p>{window.CS.getUIState().Login.errorMessage}</p>

                </div>
            )
    }

    handleUsernameChange(event: any) {
        let user = window.CS.getBMState().user;
        user.username = event.target.value
        const action: IUserAction = {
            type: ActionType.update_user,
            user: user
        }
        window.CS.clientAction(action);
    }
    handlePasswordChange(event: any) {
        let user = window.CS.getBMState().user;
        user.password = event.target.value
        const action: IUserAction = {
            type: ActionType.update_user,
            user: user
        }
        window.CS.clientAction(action);
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const uiAction: IAction = {
            type: ActionType.server_called
        }
        window.CS.clientAction(uiAction);
        axios.post('/auth/login', window.CS.getBMState().user)
            .then(res => {
                const data = res.data;
                if (data.errorMessage) {
                    const uiAction: IErrorMessage = {
                        type: ActionType.login_error,
                        errorMessage: data.errorMessage
                    }
                    window.CS.clientAction(uiAction);
                } else {
                    const loggedinAction: IUserAction = {
                        type: ActionType.user_logged_in,
                        user: data as IUser
                    }
                    const action: ISearchAction = {
                        type: ActionType.update_searchcategory,
                        searchcategory: "",
                    }
                    window.CS.clientAction(action);
                    window.CS.clientAction(loggedinAction);
                    history.push("/showadvertises");
                }
            });
    }

    handleLogout() {
        const uiAction: IAction = {
            type: ActionType.server_called,
        }
        const action: ISearchAction = {
            type: ActionType.update_searchcategory,
            searchcategory: "",
        }
        window.CS.clientAction(action);
        window.CS.clientAction(uiAction);
        axios.get('/auth/logout').then(res => {
            const loggedoutAction: IAction = {
                type: ActionType.user_logged_out
            }
            window.CS.clientAction(loggedoutAction);
        }
        );
    }

}
