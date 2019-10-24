import React from 'react';
import { IAdvertiseAction } from './ShowAllAdvertises';
import { ActionType, IAction } from '../framework/IAction';
import { IAdvertiseData, IState } from '../state/appState'
import axios from 'axios';
import '../App.css';

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
    newState.UI.waitingForResponse = false;
}
reducerFunctions[ActionType.update_advertise] = function (newState: IState, updateAction: IAdvertiseAction) {
    let advertiseToChange: IAdvertiseData[] = newState.BM.advertises.filter(advertise => advertise._id === updateAction.advertise._id)
    console.log(advertiseToChange);
    advertiseToChange[0].advertise_title = updateAction.advertise.advertise_title;
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
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        //this.handleRerenderTest = this.handleRerenderTest.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            edit_mode: props.edit,
        }
    }

    render() {

        //if the component is in edit mode, it will render different than if it just shows the data
        if (this.state.edit_mode)
            return (
                <div className="wholeProduct">
                    <ul className="ulProduct">
                        <li className="titleName">Title: <br></br> <input size={50} type="text" name="title" value={this.props.advertise.advertise_title} onChange={this.handleTitleChange} /></li>
                        <li>PictureUrl: <br></br> <input size={50} type="text" name="pictureUrl" value={this.props.advertise.advertise_pictureUrl} onChange={this.handlePictureUrlChange} /></li>
                        <li className="price">Price: <br></br> <input size={50} type="text" name="price" value={this.props.advertise.advertise_price} onChange={this.handlePriceChange} /></li>
                        <li className="description">
                            <label htmlFor="description">Description: <br></br> </label>
                            <textarea rows={5} cols={52} maxLength={300} name="description" value={this.props.advertise.advertise_description} onChange={this.handleDescriptionChange} ></textarea>
                        </li>
                        {/*<li className="owner">Owner: <br></br> {this.props.advertise.advertise_owner}</li>*/}
                        <li className="city">City: <br></br> <input size={50} type="text" name="city" value={this.props.advertise.advertise_city} onChange={this.handleCityChange} /></li>
                        <li className="type">
                            <label htmlFor="type">Choose a Type: <br></br> </label>
                            <input type="radio" name="type" value="offer" checked={this.props.advertise.advertise_type === "offer"} onClick={this.handleTypeChange} /> <span className="offerOrange">offer</span>
                            <input type="radio" name="type" value="search" checked={this.props.advertise.advertise_type === "search"} onClick={this.handleTypeChange} /> <span className="searchBlue">search</span>
                        </li>
                        <li className="status">
                            <label htmlFor="status">Choose a Status: <br></br> </label>
                            <input type="radio" name="status" value="available" checked={this.props.advertise.advertise_status === "available"} onClick={this.handleStatusChange} /> <span className="availableGreen">available</span>
                            <input type="radio" name="status" value="sold" checked={this.props.advertise.advertise_status === "sold"} onClick={this.handleStatusChange} /> <span className="soldRed">sold</span>
                        </li>
                        {/*<li className="comment">Comment: <br></br> {this.props.advertise.advertise_comment}</li>*/}
                        {/*<li className="message">Message: <br></br> {this.props.advertise.advertise_message}</li>*/}
                        <li className="category">
                        Category: <br></br> <select className="selectBox" name="category" value={this.props.advertise.advertise_category} onChange={this.handleCategoryChange}>
                            <option value="---">---</option>
                            <option value="Handy">Handy</option>
                            <option value="PC">PC</option>
                            <option value="Vertrag">Vertrag</option>
                            <option value="Sonstiges">Sonstiges</option>
                            </select>
                        </li>
                        {/*<li className="counter">Counter: <br></br> {this.props.advertise.advertise_counter}</li>*/}
                        <li className="buttonsArea">
                            <button onClick={this.handleSave} id={this.props.advertise._id}>save</button>
                        </li>
                    </ul>
                </div>
            )
        else if (window.CS.getUIState().loggedIn) {
            return (

                <div className="wholeProduct">
                    <ul className="ulProduct">
                    <li className="title">{this.props.advertise.advertise_title}</li>
                        <li><img className="picture" src={this.props.advertise.advertise_pictureUrl} alt="Picture" /></li>
                        <li className="price"><span className="priceName">Price:</span> <br></br> {this.props.advertise.advertise_price}</li>
                        <li className="description"><span className="descriptionName">Description:</span> <br></br> {this.props.advertise.advertise_description}</li>
                        <li className="owner"><span className="ownerName">Owner:</span> <br></br> {this.props.advertise.advertise_owner}</li>
                        <li className="city"><span className="cityName">City:</span> <br></br> {this.props.advertise.advertise_city}</li>
                        <li className="type"><span className="typeName">Type:</span> <br></br> {this.props.advertise.advertise_type}</li>
                        <li className="status"><span className="statusName">Status:</span> <br></br> {this.props.advertise.advertise_status} </li>
                        <li className="comment"><span className="commentName">Comment:</span> <br></br> {this.props.advertise.advertise_comment}</li>
                        <li className="message"><span className="messageName">Message:</span> <br></br> {this.props.advertise.advertise_message}</li>
                        <li className="category"><span className="categoryName">Category:</span> <br></br> {this.props.advertise.advertise_category}</li>
                        <li className="counter"><span className="counterName">Counter:</span> <br></br> {this.props.advertise.advertise_counter}</li>
                        <li className="buttonsArea">
                            <button onClick={this.handleSwitchToEditMode}>edit</button>
                            <button onClick={this.handleDelete} id={this.props.advertise._id}>sell or dispose</button>
                            {/*<button onClick={this.handleRerenderTest} >increase State Counter {window.CS.getUIState().counter}</button>*/}
                        </li>
                    </ul>
                </div> // <span className="status" style={color: this.props.advertise.advertise_status === "sold" ? `${{color: "green"}}`:`${{color: "red"}}`} >{this.props.advertise.advertise_status}</span>
            )
        }
        else
            return (

                <div className="wholeProduct">
                    <ul className="ulProduct">
                        <li className="title">{this.props.advertise.advertise_title}</li>
                        <li><img className="picture" src={this.props.advertise.advertise_pictureUrl} alt="Picture" /></li>
                        <li className="price"><span className="priceName">Price:</span> <br></br> {this.props.advertise.advertise_price}</li>
                        <li className="description"><span className="descriptionName">Description:</span> <br></br> {this.props.advertise.advertise_description}</li>
                        <li className="owner"><span className="ownerName">Owner:</span> <br></br> {this.props.advertise.advertise_owner}</li>
                        <li className="city"><span className="cityName">City:</span> <br></br> {this.props.advertise.advertise_city}</li>
                        <li className="type"><span className="typeName">Type:</span> <br></br> {this.props.advertise.advertise_type}</li>
                        <li className="status"><span className="statusName">Status:</span> <br></br> {this.props.advertise.advertise_status}</li>
                        <li className="comment"><span className="commentName">Comment:</span> <br></br> {this.props.advertise.advertise_comment}</li>
                        <li className="message"><span className="messageName">Message:</span> <br></br> {this.props.advertise.advertise_message}</li>
                        <li className="category"><span className="categoryName">Category:</span> <br></br> {this.props.advertise.advertise_category}</li>
                        <li className="counter"><span className="counterName">Counter:</span> <br></br> {this.props.advertise.advertise_counter}</li>
                    </ul>
                </div>
            )
    }
    handleSwitchToEditMode() {
        this.setState({ edit_mode: true });
    }
    handleTitleChange(event: any) {
        const newAdvertise = this.props.advertise;
        newAdvertise.advertise_title = event.target.value
        const action: IAdvertiseAction = {
            type: ActionType.update_advertise,
            advertise: newAdvertise
        }
        window.CS.clientAction(action);
    }

    handleTypeChange(event: any) {
        const newAdvertise = this.props.advertise;
        newAdvertise.advertise_type = event.target.value;
        const action: IAdvertiseAction = {
            type: ActionType.update_advertise,
            advertise: newAdvertise
        }
        window.CS.clientAction(action);
    }

    handleDescriptionChange(event: any) {
        const newAdvertise = this.props.advertise;
        newAdvertise.advertise_description = event.target.value;
        const action: IAdvertiseAction = {
            type: ActionType.update_advertise,
            advertise: newAdvertise
        }
        window.CS.clientAction(action);
    }

    handleCategoryChange(event: any) {
        const newAdvertise = this.props.advertise;
        newAdvertise.advertise_category = event.target.value;
        const action: IAdvertiseAction = {
            type: ActionType.update_advertise,
            advertise: newAdvertise
        }
        window.CS.clientAction(action);
    }

    handlePriceChange(event: any) {
        const newAdvertise = this.props.advertise;
        newAdvertise.advertise_price = event.target.value;
        const action: IAdvertiseAction = {
            type: ActionType.update_advertise,
            advertise: newAdvertise
        }
        window.CS.clientAction(action);
    }

    handlePictureUrlChange(event: any) {
        const newAdvertise = this.props.advertise;
        newAdvertise.advertise_pictureUrl = event.target.value;
        const action: IAdvertiseAction = {
            type: ActionType.update_advertise,
            advertise: newAdvertise
        }
        window.CS.clientAction(action);
    }

    handleStatusChange(event: any) {
        const newAdvertise = this.props.advertise;
        newAdvertise.advertise_status = event.target.value;
        const action: IAdvertiseAction = {
            type: ActionType.update_advertise,
            advertise: newAdvertise
        }
        window.CS.clientAction(action);
    }

    handleCityChange(event: any) {
        const newAdvertise = this.props.advertise;
        newAdvertise.advertise_city = event.target.value;
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
    /*
    handleRerenderTest(event: any) {
        const action: IAction = {
            type: ActionType.render_test,
        }
        window.CS.clientAction(action);
    }
    */
}