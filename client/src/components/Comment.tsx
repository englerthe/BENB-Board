import React, { Component } from 'react'
import { ActionType, IAction } from '../framework/IAction';
import { IState, ICommentData, IUser} from '../state/appState'
import axios from 'axios';
import { IWindow } from '../framework/IWindow';
import { reducerFunctions } from '../reducer/appReducer';
import history from '../framework/history';

declare let window: IWindow;


export interface IUserAction extends IAction {
    user: IUser
}

export interface IComment extends IAction {
    comment: ICommentData
}



reducerFunctions[ActionType.add_comment] = function (newState: IState, updateAction: IComment) {
    console.log(updateAction.comment);
    newState.BM.comment = updateAction.comment;
    return newState
}



export default class Comment extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="commentUser">Username:</label>
                    <input type="text" placeholder="commentUser" onChange={this.handleCommentUser} value={window.CS.getBMState().user.username} />
                    <br />
                    <label htmlFor="commentText">Comment:</label>
                    <textarea rows={6} cols={52} maxLength={400} name="description" onChange={this.handleCommentDescription} value={window.CS.getBMState().comment.comment_text} ></textarea>
                    <br />
                    <button onClick={this.handleSubmit}>Add Comment</button>
                </form>
                <p>{window.CS.getUIState().Register.errorMessage}</p>
            </div>
        )
    }

    handleCommentUser(event: any) {
        let user = window.CS.getBMState().user;
        user.firstname = event.target.value
        const action: IUserAction = {
            type: ActionType.update_user,
            user: user
        }
        window.CS.clientAction(action);
    }
    handleCommentDescription(event: any) {
        let user = window.CS.getBMState().user;
        user.lastname = event.target.value
        const action: IUserAction = {
            type: ActionType.update_user,
            user: user
        }
        window.CS.clientAction(action);
    }


    handleSave = (event: any) => {
        this.setState({ edit_mode: false });
        const uiAction: IAction = {
            type: ActionType.server_called
        }
        window.CS.clientAction(uiAction);
        axios.put('/advertises/update/' + this.props.advertise._id, this.props.advertise)
            .then(res => {
                const uiAction: IAction = {
                    type: ActionType.advertise_updated
                }
                window.CS.clientAction(uiAction);
            });
    }



    handleSubmit(event: any) {
        event.preventDefault();
        const uiAction: IAction = {
            type: ActionType.server_called
        }
        window.CS.clientAction(uiAction);
        axios.post('/auth/signup', window.CS.getBMState().user)
            .then(res => {
                const data = res.data;
                console.log(data);
                if (data.errorMessage) {
                    const uiAction: IErrorMessage = {
                        type: ActionType.register_error,
                        errorMessage: data.errorMessage
                    }
                    window.CS.clientAction(uiAction);
                } else {
                    const uiAction: IAction = {
                        type: ActionType.add_comment
                    }
                    history.push('/');
                    window.CS.clientAction(uiAction);
                }
            });
    }

}
