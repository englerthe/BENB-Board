import React from 'react';
import { IAdvertiseAction } from './ShowAllAdvertises';
import { ActionType, IAction } from '../framework/IAction';
import { IAdvertiseData, IState } from '../state/appState'
import axios from 'axios';

import { IWindow } from '../framework/IWindow';
import { reducerFunctions } from '../reducer/appReducer';
declare let window: IWindow;

//this file defines the React component that renders a single asset to the browser window
//it also contains the logic to change asset properties and save the changes to the database
//most of the used React framework features are already explained in the comments of App.js
//so this code hopefully mostly explains itself ...

interface IProps {
    edit: boolean;
    advertise: IAdvertiseData;
}

interface IJSXState {
    edit_mode: boolean;
}

reducerFunctions[ActionType.advertise_updated] = function (newState: IState, updateAction: IAdvertiseAction) {
    newState.UI.waitingForResponse=false;
}
reducerFunctions[ActionType.update_advertise] = function (newState: IState, updateAction: IAdvertiseAction) {
    let advertiseToChange: IAdvertiseData[] = newState.BM.advertises.filter(advertise => advertise._id === updateAction.advertise._id)
    console.log(advertiseToChange);
    advertiseToChange[0].advertise_type = updateAction.advertise.advertise_type;
    advertiseToChange[0].advertise_description = updateAction.advertise.advertise_description;
    advertiseToChange[0].advertise_category = updateAction.advertise.advertise_category;
    advertiseToChange[0].advertise_price = updateAction.advertise.advertise_price;
    advertiseToChange[0].advertise_pictureUrl = updateAction.advertise.advertise_pictureUrl;
    advertiseToChange[0].advertise_owner = updateAction.advertise.advertise_owner;
    advertiseToChange[0].advertise_comment = updateAction.advertise.advertise_comment;
    advertiseToChange[0].advertise_counter = updateAction.advertise.advertise_counter;
    advertiseToChange[0].advertise_status = updateAction.advertise.advertise_status;
    advertiseToChange[0].advertise_message = updateAction.advertise.advertise_message;
    advertiseToChange[0].advertise_city = updateAction.advertise.advertise_city;
    return newState;
}
reducerFunctions[ActionType.delete_advertise] = function (newState: IState, deleteAction: IAdvertiseAction) {
    let advertisesToKeep: IAdvertiseData[] = newState.BM.advertises.filter(advertise => advertise._id !== deleteAction.advertise._id)
    newState.BM.advertises = advertisesToKeep;
    return newState;
}


export default class SingleAdvertise extends React.PureComponent<IProps, IJSXState> {

    constructor(props: IProps) {
        super(props);

        this.handleSwitchToEditMode = this.handleSwitchToEditMode.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleRerenderTest = this.handleRerenderTest.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            edit_mode: props.edit,
        }
    }

    render() {

        //if the component is in edit mode, it will render different than if it just shows the data
        if (this.state.edit_mode)
            return (
                <div>
                <p>Type: <input type="text" name="type" value={this.props.advertise.advertise_type} onChange={this.handleNameChange} /></p>
                <p>Description: <input type="text" name="description" value={this.props.advertise.advertise_description} onChange={this.handleNameChange} /></p>
                <p>Category: <input type="text" name="category" value={this.props.advertise.advertise_category} onChange={this.handleNameChange} /></p>
                <p>Price: <input type="text" name="price" value={this.props.advertise.advertise_price} onChange={this.handleNameChange} /></p>
                <p>Picture: <input type="text" name="pictureUrl" value={this.props.advertise.advertise_pictureUrl} onChange={this.handleNameChange} /></p>
                <p>Status: <input type="text" name="status" value={this.props.advertise.advertise_status} onChange={this.handleNameChange} /></p>
                <p>City: <input type="text" name="city" value={this.props.advertise.advertise_city} onChange={this.handleNameChange} /></p>
                <p>
                <button onClick={this.handleSave} id={this.props.advertise._id}>save</button>
                <button onClick={this.handleRerenderTest} >increase State Counter</button>
                </p>
                </div>
            )
        else
            return (

                <div>
                    <p>Type: {this.props.advertise.advertise_type}</p>
                    <p>Description: {this.props.advertise.advertise_description}</p>
                    <p>Category: {this.props.advertise.advertise_category}</p>
                    <p>Price: {this.props.advertise.advertise_price}</p>
                    <p>Picture: {this.props.advertise.advertise_pictureUrl}</p>
                    <p>Owner: {this.props.advertise.advertise_owner}</p>
                    <p>Comment: {this.props.advertise.advertise_comment}</p>
                    <p>Counter: {this.props.advertise.advertise_counter}</p>
                    <p>Status: {this.props.advertise.advertise_status}</p>
                    <p>Message: {this.props.advertise.advertise_message}</p>
                    <p>City: {this.props.advertise.advertise_city}</p>
                    <p>
                        <button onClick={this.handleSwitchToEditMode}>edit</button>
                        <button onClick={this.handleDelete} id={this.props.advertise._id}>sell or dispose</button>
                        <button onClick={this.handleRerenderTest} >increase State Counter {window.CS.getUIState().counter}</button>
                    </p>
                </div>
            )
    }
    handleSwitchToEditMode() {
        this.setState({ edit_mode: true });
    }
    handleNameChange(event: any) {
        const newAdvertise = this.props.advertise;
        newAdvertise.advertise_type = event.target.value
        const action: IAdvertiseAction = {
            type: ActionType.update_advertise,
            advertise: newAdvertise
        }
        window.CS.clientAction(action);
    }
    handleValueChange(event: any) {
        const newAdvertise = this.props.advertise;
        newAdvertise.advertise_description = event.target.value;
        const action: IAdvertiseAction = {
            type: ActionType.update_advertise,
            advertise: newAdvertise
        }
        window.CS.clientAction(action);
    }
    handleSave(event: any) {
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
    handleDelete() {
        const uiAction: IAction = {
            type: ActionType.server_called
          }
          window.CS.clientAction(uiAction);
          axios.post('/advertises/delete/' + this.props.advertise._id)
          .then(res => {
            const action: IAdvertiseAction = {
                type: ActionType.delete_advertise,
                advertise: this.props.advertise
            }
            window.CS.clientAction(action)
          });
    }
    handleRerenderTest(event: any) {
        const action: IAction = {
            type: ActionType.render_test,
        }
        window.CS.clientAction(action);
    }
}