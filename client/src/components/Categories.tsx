import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = (props: any) => {
    return (
        <div className="categories">
            <h2>Categories</h2>
            <ul>

                <li><NavLink to="/">antiques & collectors</NavLink></li>
                <li><NavLink to="/">car, motorcycle & accessories</NavLink></li>
                <li><NavLink to="/">baby & kids</NavLink></li>
                <li><NavLink to="/">beauty & wellness</NavLink></li>
                <li><NavLink to="/">books, movies & music</NavLink></li>
                <li><NavLink to="/">electronics & computer</NavLink></li>
                <li><NavLink to="/">mobile phone & equipment</NavLink></li>
                <li><NavLink to="/">pet needs</NavLink></li>
                <li><NavLink to="/">hobby & leisure</NavLink></li>
                <li><NavLink to="/">property</NavLink></li>
                <li><NavLink to="/">jobs & services</NavLink></li>
                <li><NavLink to="/">clothes & fashion</NavLink></li>
                <li><NavLink to="/">furniture, housing & household</NavLink></li>
                <li><NavLink to="/">jewelry & accessories</NavLink></li>
                <li><NavLink to="/">games & consoles</NavLink></li>
                <li><NavLink to="/">sports, travel & outdoor</NavLink></li>
                <li><NavLink to="/">tickets & events</NavLink></li>
                <li><NavLink to="/">moving & help</NavLink></li>
                <li><NavLink to="/">tools</NavLink></li>

            </ul>
        </div>
    )
}
export default Categories;