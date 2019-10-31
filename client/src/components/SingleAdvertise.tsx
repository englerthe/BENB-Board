import React from "react";
import { IAdvertiseAction } from "./ShowAllAdvertises";
import { ActionType, IAction } from "../framework/IAction";
import { IAdvertiseData, IState, ICommentData } from "../state/appState";
import axios from "axios";
import "../App.css";
import history from '../framework/history';
import { IWindow } from "../framework/IWindow";
import { reducerFunctions } from "../reducer/appReducer";
declare let window: IWindow;

//this file defines the React component that renders a single asset to the browser window
//it also contains the logic to change asset properties and save the changes to the database
//most of the used React framework features are already explained in the comments of App.js
//so this code hopefully mostly explains itself ...

interface IProps {
  edit: boolean;
  advertise: IAdvertiseData;
  comment: ICommentData;
}

interface IJSXState {
  edit_mode: boolean;
  comment: {
    comment_user: string,
    comment_text: string
  }
}

export interface IComment extends IAction {
  comment: ICommentData
}

reducerFunctions[ActionType.advertise_updated] = function (newState: IState, updateAction: IAdvertiseAction) {
  newState.UI.waitingForResponse = false;
};

reducerFunctions[ActionType.update_advertise] = function (newState: IState, updateAction: IAdvertiseAction) {
  let advertiseToChange: IAdvertiseData[] = newState.BM.advertises.filter(advertise => advertise._id === updateAction.advertise._id);
  advertiseToChange[0].advertise_title = updateAction.advertise.advertise_title;
  advertiseToChange[0].advertise_type = updateAction.advertise.advertise_type;
  advertiseToChange[0].advertise_description = updateAction.advertise.advertise_description;
  advertiseToChange[0].advertise_category = updateAction.advertise.advertise_category;
  advertiseToChange[0].advertise_price = updateAction.advertise.advertise_price;
  advertiseToChange[0].advertise_pictureUrl = updateAction.advertise.advertise_pictureUrl;
  advertiseToChange[0].advertise_owner = updateAction.advertise.advertise_owner;
  //advertiseToChange[0].advertise_comment = updateAction.advertise.advertise_comment;
  advertiseToChange[0].advertise_counter = updateAction.advertise.advertise_counter;
  advertiseToChange[0].advertise_status = updateAction.advertise.advertise_status;
  advertiseToChange[0].advertise_message = updateAction.advertise.advertise_message;
  advertiseToChange[0].advertise_city = updateAction.advertise.advertise_city;
  return newState;
};

reducerFunctions[ActionType.delete_advertise] = function (newState: IState, deleteAction: IAdvertiseAction) {
  let advertisesToKeep: IAdvertiseData[] = newState.BM.advertises.filter(
    advertise => advertise._id !== deleteAction.advertise._id
  );
  newState.BM.advertises = advertisesToKeep;
  return newState;
};

export default class SingleAdvertise extends React.PureComponent<IProps, IJSXState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      edit_mode: props.edit,
      comment: {
        comment_user: "",
        comment_text: ""
      }
    };
  }
  
  handleSwitchToEditMode = () => {
    this.setState({ edit_mode: true });
  };
  handleTitleChange = (event: any) => {
    const newAdvertise = this.props.advertise;
    newAdvertise.advertise_title = event.target.value;
    const action: IAdvertiseAction = {
      type: ActionType.update_advertise,
      advertise: newAdvertise
    };
    window.CS.clientAction(action);
  };

  handleTypeChange = (event: any) => {
    const newAdvertise = this.props.advertise;
    newAdvertise.advertise_type = event.target.value;
    const action: IAdvertiseAction = {
      type: ActionType.update_advertise,
      advertise: newAdvertise
    };
    window.CS.clientAction(action);
  };

  handleDescriptionChange = (event: any) => {
    const newAdvertise = this.props.advertise;
    newAdvertise.advertise_description = event.target.value;
    const action: IAdvertiseAction = {
      type: ActionType.update_advertise,
      advertise: newAdvertise
    };
    window.CS.clientAction(action);
  };

  handleCategoryChange = (event: any) => {
    const newAdvertise = this.props.advertise;
    newAdvertise.advertise_category = event.target.value;
    const action: IAdvertiseAction = {
      type: ActionType.update_advertise,
      advertise: newAdvertise
    };
    window.CS.clientAction(action);
  };

  handlePriceChange = (event: any) => {
    const newAdvertise = this.props.advertise;
    newAdvertise.advertise_price = event.target.value;
    const action: IAdvertiseAction = {
      type: ActionType.update_advertise,
      advertise: newAdvertise
    };
    window.CS.clientAction(action);
  };

  handlePictureUrlChange = (event: any) => {
    const newAdvertise = this.props.advertise;
    newAdvertise.advertise_pictureUrl = event.target.value;
    const action: IAdvertiseAction = {
      type: ActionType.update_advertise,
      advertise: newAdvertise
    };
    window.CS.clientAction(action);
  };

  handleStatusChange = (event: any) => {
    const newAdvertise = this.props.advertise;
    newAdvertise.advertise_status = event.target.value;
    const action: IAdvertiseAction = {
      type: ActionType.update_advertise,
      advertise: newAdvertise
    };
    window.CS.clientAction(action);
  };

  handleCityChange = (event: any) => {
    const newAdvertise = this.props.advertise;
    newAdvertise.advertise_city = event.target.value;
    const action: IAdvertiseAction = {
      type: ActionType.update_advertise,
      advertise: newAdvertise
    };
    window.CS.clientAction(action);
  };

  handleSave = (event: any) => {
    this.setState({ edit_mode: false });
    const uiAction: IAction = {
      type: ActionType.server_called
    };
    window.CS.clientAction(uiAction);
    axios
      .put(
        "/advertises/update/" + this.props.advertise._id,
        this.props.advertise
      )
      .then(res => {
        const uiAction: IAction = {
          type: ActionType.advertise_updated
        };
        window.CS.clientAction(uiAction);
      });
  };
  handleDelete = () => {
    const uiAction: IAction = {
      type: ActionType.server_called
    };
    window.CS.clientAction(uiAction);
    axios.post("/advertises/delete/" + this.props.advertise._id).then(res => {
      const action: IAdvertiseAction = {
        type: ActionType.delete_advertise,
        advertise: this.props.advertise
      };
      window.CS.clientAction(action);
    });
  };

  handleCommentUser = (event: any) => {
    let comment = {
      comment_advertise: window.CS.getBMState().advertises[0]._id,
      comment_text: event.target.value,
      comment_user: window.CS.getBMState().user.username
    };
    this.setState({
      comment: comment
    })
  }
  handleCommentDescription = (event: any) => {
    let comment = {
      comment_advertise: window.CS.getBMState().advertises[0]._id,
      comment_text: event.target.value,
      comment_user: window.CS.getBMState().user.username
    };
    this.setState({
      comment: comment
    })
  }

  handleCreateComment = (e: any) => {
    e.preventDefault();
    const uiAction: IAction = {
      type: ActionType.server_called
    }
    window.CS.clientAction(uiAction);
    axios.post('/advertises/comment/add', this.state.comment)
      .then(res => {
        history.push("/");
        this.setState({
          comment: {
            comment_user: "",
            comment_text: ""
          }
        })
      });
  }
   
  
  render() {
    let locationProp = this.props as any;
    //if the component is in edit mode, it will render different than if it just shows the data
    if (
      this.state.edit_mode && locationProp.location.pathname === "/showadvertises"
    )
      return (
        <div className="wholeProduct">
          <ul className="ulProduct">
            <li className="titleName">Title: <br></br>{" "}<input size={50} type="text" name="title" value={this.props.advertise.advertise_title} onChange={this.handleTitleChange} />
            </li>
            <li>PictureUrl: <br></br>{" "}<input size={50} type="text" name="pictureUrl" value={this.props.advertise.advertise_pictureUrl} onChange={this.handlePictureUrlChange} />
            </li>
            <li className="price">Price: <br></br>{" "}<input size={50} type="text" name="price" value={this.props.advertise.advertise_price} onChange={this.handlePriceChange} />
            </li>
            <li className="description">
              <label htmlFor="description">Description: <br></br>{" "}</label><textarea rows={5} cols={52} maxLength={300} name="description" value={this.props.advertise.advertise_description} onChange={this.handleDescriptionChange}></textarea>
            </li>
            {/*<li className="owner">Owner: <br></br> {this.props.advertise.advertise_owner}</li>*/}
            <li className="city">City: <br></br>{" "}<input size={50} type="text" name="city" value={this.props.advertise.advertise_city} onChange={this.handleCityChange} />
            </li>
            <li className="type">
              <label htmlFor="type">Choose a Type: <br></br>{" "}</label><input type="radio" name="type" value="offer" checked={this.props.advertise.advertise_type === "offer"} onClick={this.handleTypeChange} />{" "}
              <span className="offerOrange">offer</span>
              <input type="radio" name="type" value="search" checked={this.props.advertise.advertise_type === "search"} onClick={this.handleTypeChange} />{" "}
              <span className="searchBlue">search</span>
            </li>
            <li className="status">
              <label htmlFor="status">Choose a Status: <br></br>{" "}</label>
              <input type="radio" name="status" value="available" checked={this.props.advertise.advertise_status === "available"} onClick={this.handleStatusChange} />{" "}
              <span className="availableGreen">available</span>
              <input type="radio" name="status" value="sold" checked={this.props.advertise.advertise_status === "sold"} onClick={this.handleStatusChange} />{" "}
              <span className="soldRed">sold</span>
            </li>
            {/*<li className="comment">Comment: <br></br> {this.props.advertise.advertise_comment}</li>*/}
            {/*<li className="message">Message: <br></br> {this.props.advertise.advertise_message}</li>*/}
            <li className="category">Category: <br></br>{" "}<select className="selectBox" name="category" value={this.props.advertise.advertise_category} onChange={this.handleCategoryChange}>
              <option value="---">---</option>
              <option value="antiques & collectors">antiques & collectors</option>
              <option value="car, motorcycle & accessories">car, motorcycle & accessories</option>
              <option value="baby & kids">baby & kids</option>
              <option value="beauty & wellness">beauty & wellness</option>
              <option value="books, movies & music">books, movies & music</option>
              <option value="electronics & computer">electronics & computer</option>
              <option value="mobile phone & equipment">mobile phone & equipment</option>
              <option value="pet needs">pet needs</option>
              <option value="hobby & leisure">hobby & leisure</option>
              <option value="property">property</option>
              <option value="jobs & services">jobs & services</option>
              <option value="clothes & fashion">clothes & fashion</option>
              <option value="furniture, housing & household">furniture, housing & household</option>
              <option value="jewelry & accessories">jewelry & accessories</option>
              <option value="games & consoles">games & consoles</option>
              <option value="sports, travel & outdoor">sports, travel & outdoor</option>
              <option value="tickets & events">tickets & events</option>
              <option value="moving & help">moving & help</option>
              <option value="tools">tools</option>
            </select>
            </li>
            {/*<li className="counter">Counter: <br></br> {this.props.advertise.advertise_counter}</li>*/}
            <li className="buttonsArea">
              <button className="saveButtonInEditMode" onClick={this.handleSave} id={this.props.advertise._id}>save</button>
            </li>
          </ul>
        </div>
      );
    else if (
      window.CS.getUIState().loggedIn && locationProp.location.pathname === "/showadvertises"
    ) {
      return (
        <div className="wholeProduct">
          <ul className="ulProduct">
            <li className="title">{this.props.advertise.advertise_title}</li>
            <li><img className="picture" src={this.props.advertise.advertise_pictureUrl} alt="no pic available" /></li>
            <li className="price"><span className="priceName">Price:</span>{" "}{this.props.advertise.advertise_price}</li>
            <li className="description"><span className="descriptionName">Description:</span> <br></br>{" "}{this.props.advertise.advertise_description}</li>
            <li className="owner"><span className="ownerName">Owner:</span>{" "}{this.props.advertise.advertise_owner}</li>
            <li className="city"><span className="cityName">City:</span>{" "}{this.props.advertise.advertise_city}</li>
            <li className="type"><span className="typeName">Type:</span>{" "}{this.props.advertise.advertise_type}</li>
            <li className="status"><span className="statusName">Status:</span>{" "}<span id={this.props.advertise.advertise_status}>{this.props.advertise.advertise_status}</span></li>
            <li className="comment"><span className="commentName">Comment:</span> <br></br>{" "}{this.props.advertise.advertise_comment}</li>
            <li className="category"><span className="categoryName">Category:</span> <br></br>{" "}{this.props.advertise.advertise_category}</li>
            <li className="buttonsArea">
              <button className="editButton" onClick={this.handleSwitchToEditMode}>edit</button>
              <button className="deleteButton" onClick={this.handleDelete} id={this.props.advertise._id}>delete it</button>
              {/*<button onClick={this.handleRerenderTest} >increase State Counter {window.CS.getUIState().counter}</button>*/}
            </li>
          </ul>
        </div>
      );
    } else if (window.CS.getUIState().loggedIn) {
      return ( 
        <div className="wholeProduct">
          <ul className="ulProduct">
            <li className="title">{this.props.advertise.advertise_title}</li>
            <li><img className="picture" src={this.props.advertise.advertise_pictureUrl} alt="no pic available" /></li>
            <li className="price"><span className="priceName">Price:</span>{" "}{this.props.advertise.advertise_price}</li>
            <li className="description"><span className="descriptionName">Description:</span> <br></br>{" "}{this.props.advertise.advertise_description}</li>
            <li className="owner"><span className="ownerName">Owner:</span>{" "}{this.props.advertise.advertise_owner}</li>
            <li className="city"><span className="cityName">City:</span>{" "}{this.props.advertise.advertise_city}</li>
            <li className="type"><span className="typeName">Type:</span>{" "}{this.props.advertise.advertise_type}</li>
            <li className="status"><span className="statusName">Status:</span>{" "}<span id={this.props.advertise.advertise_status}>{this.props.advertise.advertise_status}</span></li>
            <li className="comment"><span className="commentName">Comment:</span> <br></br>{" "}{this.props.advertise.advertise_comment}</li>
            <li className="category"><span className="categoryName">Category:</span> <br></br>{" "}{this.props.advertise.advertise_category}</li>
          </ul>
          <ul>
            <li>
              <div>
                <form className="commentField" onSubmit={this.handleCreateComment}>
                  <label htmlFor="commentUser">Username:</label>
                  <input type="text" value={window.CS.getBMState().user.username} disabled />
                  <br />
                  <label htmlFor="commentText">Comment:</label>
                  <textarea rows={6} cols={52} maxLength={400} name="description" onChange={this.handleCommentDescription} value={this.state.comment.comment_text}></textarea>
                  <br />
                  <button className="commentButton" type="submit" >Add Comment</button>
                </form>
                <p>{window.CS.getUIState().Register.errorMessage}</p>
              </div>
            </li>
          </ul>
        </div>
      );
    } else { 
      return (
        <div className="wholeProduct">
          <ul className="ulProduct">
            <li className="title">{this.props.advertise.advertise_title}</li>
            <li><img className="picture" src={this.props.advertise.advertise_pictureUrl} alt="no pic available" /></li>
            <li className="price"><span className="priceName">Price:</span>{" "}{this.props.advertise.advertise_price}</li>
            <li className="description"><span className="descriptionName">Description:</span> <br></br>{" "}{this.props.advertise.advertise_description}</li>
            <li className="owner"><span className="ownerName">Owner:</span>{" "}{this.props.advertise.advertise_owner}</li>
            <li className="city"><span className="cityName">City:</span>{" "}{this.props.advertise.advertise_city}</li>
            <li className="type"><span className="typeName">Type:</span>{" "}{this.props.advertise.advertise_type}</li>
            <li className="status"><span className="statusName">Status:</span>{" "}<span id={this.props.advertise.advertise_status}>{this.props.advertise.advertise_status}</span></li>
            <li className="comment"><span className="commentName">Comment:</span> <br></br>{" "}{this.props.advertise.advertise_comment}</li>
            <li className="category"><span className="categoryName">Category:</span> <br></br>{" "}{this.props.advertise.advertise_category}</li>
          </ul>
        </div>
      );
    }
  }
}

