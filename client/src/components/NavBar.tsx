import * as React from 'react';
import { NavLink } from 'react-router-dom';

const logoName = require('../images/benb-logo.jpg')


const nav = (props: any) => {
    return (
        <nav>
            <div id="showlogo">
                <img src={logoName} alt="BENB-Board"/>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <div className="nav-search">
                        <form action="/search-advertisements" method="get">
                            <input type="text" name="title" placeholder="Search an advertisement by title" />
                                <button type="submit">Search advertisement by title</button>
                        </form>
                    </div>
                    <li><NavLink exact={true} to="/">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/showadvertises">Advertises</NavLink></li>
            </ul>
            </div>
        </nav>
            )
        }
export default nav;