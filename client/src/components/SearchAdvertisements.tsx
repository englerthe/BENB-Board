import React, { Component } from 'react'
import SingleAdvertise from './SingleAdvertise'
import mongoose from 'mongoose';
import { IAction, ActionType } from '../framework/IAction';
import { IAdvertiseData, IState } from '../state/appState'
import axios from 'axios';
import { reducerFunctions } from '../reducer/appReducer';
import '../App.css';

import { IWindow } from '../framework/IWindow'
declare let window: IWindow;

interface IProps { };
interface IJSXState { };
export interface IAdvertiseAction extends IAction {
  advertise: IAdvertiseData
}


export default class SearchAdvertisements extends Component<IProps, IJSXState> {
  constructor(props: any) {
      super(props);
    }

  render() {
      return (
        <div>
        {/*{window.CS.getUIState().waitingForResponse.toString()}{window.CS.getUIState().counter}*/}
        <div>
        {window.CS.getBMState().advertises.map(advertise => <SingleAdvertise key={advertise._id} advertise={advertise} edit={false} />)}
      </div>
    </div>
  )
}
  handleCreateAdvertise() {
      console.log("handleCreateAdvertise invoked");
      const uiAction: IAction = {
        type: ActionType.server_called
      }
      window.CS.clientAction(uiAction);
      const newAdvertise: IAdvertiseData = {
        _id: mongoose.Types.ObjectId().toString(),
        advertise_title: "",
        advertise_type:"offer",
        advertise_description: "",
        advertise_category: [],
        advertise_price: "",
        advertise_pictureUrl: "",
        advertise_counter: 0,
        advertise_status: "available",
        advertise_city: ""
      }
      const action: IAdvertiseAction = {
        type: ActionType.create_advertise,
        advertise: newAdvertise
      }
      axios.post('/advertises/add', newAdvertise)
      .then(res => {
        window.CS.clientAction(action);
        console.log('test:', res.data)
      });
    }
}
