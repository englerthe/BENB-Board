import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = (props: any) => {
    return (
        <div className="categories">
            <h2>Categories</h2>
            <ul>

                <li><NavLink to="/">Cell Phones & Accessoires</NavLink></li>
                <li><NavLink to="/">Electronic, Computers & Accessoires</NavLink></li>
                <li><NavLink to="/">Motors</NavLink></li>
                <li><NavLink to="/">Home & Garden</NavLink></li>
                <li><NavLink to="/">Baby</NavLink></li>
                <li><NavLink to="/">Clothing, Shoes & Accessoires</NavLink></li>
                <li><NavLink to="/">Books</NavLink></li>
                <li><NavLink to="/">Music & Movies</NavLink></li>
                <li><NavLink to="/">Everything else</NavLink></li>

            </ul>
        </div>
    )
}
export default Categories;