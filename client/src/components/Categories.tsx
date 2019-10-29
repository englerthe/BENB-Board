import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IAdvertiseData, IState } from '../state/appState';
import { ActionType, IAction } from '../framework/IAction';
import { reducerFunctions } from '../reducer/appReducer';
import { IWindow } from '../framework/IWindow';

declare let window: IWindow;

interface IProps {
    searchcategory: string;
}
export interface ISearchAction extends IAction {
    searchcategory: string;
}

reducerFunctions[ActionType.update_searchcategory] = function (newState: IState, action: ISearchAction) {
    newState.UI.searchbar = "";
    newState.UI.searchcategory = action.searchcategory;
    return newState;
}

export default class Categories extends Component {
    constructor(props: IProps) {
        super(props);
    }
    handleCategorySearch = (event: any) => {
        const action: ISearchAction = {
            type: ActionType.update_searchcategory,
            searchcategory: event.target.id,
        }
        window.CS.clientAction(action);
    }
    render() {
        return (
            <div className="categories">
                <h2>Categories</h2>
                <ul>
                    <li><Link to="/" id="antiques & collectors" onClick={this.handleCategorySearch} >antiques & collectors</Link></li>
                    <li><Link to="/" id="car, motorcycle & accessories" onClick={this.handleCategorySearch} >car, motorcycle & accessories</Link></li>
                    <li><Link to="/" id="baby & kids" onClick={this.handleCategorySearch} >baby & kids</Link></li>
                    <li><Link to="/" id="beauty & wellness" onClick={this.handleCategorySearch} >beauty & wellness</Link></li>
                    <li><Link to="/" id="books, movies & music" onClick={this.handleCategorySearch} >books, movies & music</Link></li>
                    <li><Link to="/" id="electronics & computer" onClick={this.handleCategorySearch} >electronics & computer</Link></li>
                    <li><Link to="/" id="mobile phone & equipment" onClick={this.handleCategorySearch} >mobile phone & equipment</Link></li>
                    <li><Link to="/" id="pet needs" onClick={this.handleCategorySearch} >pet needs</Link></li>
                    <li><Link to="/" id="hobby & leisure" onClick={this.handleCategorySearch} >hobby & leisure</Link></li>
                    <li><Link to="/" id="property" onClick={this.handleCategorySearch} >property</Link></li>
                    <li><Link to="/" id="jobs & services" onClick={this.handleCategorySearch} >jobs & services</Link></li>
                    <li><Link to="/" id="clothes & fashion" onClick={this.handleCategorySearch}>clothes & fashion</Link></li>
                    <li><Link to="/" id="furniture, housing & household" onClick={this.handleCategorySearch} >furniture, housing & household</Link></li>
                    <li><Link to="/" id="jewelry & accessories" onClick={this.handleCategorySearch} >jewelry & accessories</Link></li>
                    <li><Link to="/" id="games & consoles" onClick={this.handleCategorySearch} >games & consoles</Link></li>
                    <li><Link to="/" id="sports, travel & outdoor" onClick={this.handleCategorySearch} >sports, travel & outdoor</Link></li>
                    <li><Link to="/" id="tickets & events" onClick={this.handleCategorySearch} >tickets & events</Link></li>
                    <li><Link to="/" id="moving & help" onClick={this.handleCategorySearch} >moving & help</Link></li>
                    <li><Link to="/" id="tools" onClick={this.handleCategorySearch} >tools</Link></li>

                </ul>
            </div>
        )
    }
}