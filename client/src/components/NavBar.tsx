import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { IWindow } from '../framework/IWindow';
import '../App.css';

const logoName = require('../images/benb-logo.jpg')
declare let window: IWindow;

const nav = (props: any) => {
    if (window.CS.getUIState().loggedIn) {
        return (
            <nav>
                <div id="showlogo">
                    <img className="BENBlogo" src={logoName} alt="BENB-Board" />
                </div>
                <div>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <div className="nav-search">
                            <form action="/search-advertisements" method="get">
                                <input className="NavBarSearchInput" type="text" name="title" placeholder="Search an advertisement by title" />
                                <button className="NavBarSearchButton" type="submit">Search advertisement by title</button>
                            </form>
                        </div>
                        <li><NavLink to="/showadvertises">My advertises</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
    else {
        return (
            <nav>
                <div id="showlogo">
                    <img className="BENBlogo" src={logoName} alt="BENB-Board" />
                </div>
                <div>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <div className="nav-search">
                            <form action="/search-advertisements" method="get">
                                <input className="NavBarSearchInput" type="text" name="title" placeholder="Search an advertisement by title" />
                                <button className="NavBarSearchButton" type="submit">Search advertisement by title</button>
                            </form>
                        </div>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        {/*<li><NavLink to="/showadvertises">Advertises</NavLink></li>*/}
                    </ul>
                </div>
            </nav>
        )
    }
}
export default nav;