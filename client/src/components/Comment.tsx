import React, { Component } from 'react'
import { ActionType, IAction } from '../framework/IAction';
import { IState, ICommentData, IUser, IAdvertiseData} from '../state/appState'
import axios from 'axios';
import mongoose from 'mongoose';
import { IWindow } from '../framework/IWindow';
import { reducerFunctions } from '../reducer/appReducer';

declare let window: IWindow;


export interface IUserAction extends IAction {
    user: IUser
}

export interface IComment extends IAction {
    comment: ICommentData
}
export interface IErrorMessage extends IAction {
    errorMessage: string;
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
                <form onSubmit={this.handleCreateComment}>
                    <label htmlFor="commentUser">Username:</label>
                    <input type="text" placeholder="commentUser" onChange={this.handleCommentUser} value={window.CS.getBMState().comment.comment_user} />
                    <br />
                    <label htmlFor="commentText">Comment:</label>
                    <textarea rows={6} cols={52} maxLength={400} name="description" onChange={this.handleCommentDescription} value={window.CS.getBMState().comment.comment_text} ></textarea>
                    <br />
                    <button onClick={this.handleCreateComment}>Add Comment</button>
                </form>
                <p>{window.CS.getUIState().Register.errorMessage}</p>
            </div>
        )
    }
    handleCommentUser = (event: any) => {
        let comment = window.CS.getBMState().comment;
        comment.comment_user = event.target.value
        const action: IComment = {
            type: ActionType.add_comment,
            comment: comment
        }
        window.CS.clientAction(action);
    }
    handleCommentDescription = (event: any) => {
        let comment = window.CS.getBMState().comment;
        comment.comment_text = event.target.value
        const action: IComment = {
            type: ActionType.add_comment,
            comment: comment
        }
        window.CS.clientAction(action);
    }

    handleCreateComment = () => {
        console.log("handleCreateComment invoked");
        const uiAction: IAction = {
          type: ActionType.server_called
        }
        window.CS.clientAction(uiAction);
        const newComment: ICommentData = {
          _id: mongoose.Types.ObjectId().toString(),
          comment_user: "",
          comment_text: "",
        }
        const action: IComment = {
          type: ActionType.add_comment,
          comment: newComment
        }
        axios.post('/advertises/comment/add', newComment)
          .then(res => {
            window.CS.clientAction(action);
          });
}
}
