
import React from 'react';
import s from "./Search.module.css";
import {NavLink} from "react-router-dom";
const Search = ()=> {
    return(
        <div className={s.search}>

                <div className={s.menu}><NavLink to="/Events" activeClassName={s.active}>Events </NavLink>
            <NavLink to="/Users" activeClassName={s.active}>People</NavLink>
                    <NavLink to="/News" activeClassName={s.active}>News</NavLink>
                    <NavLink to="/Search" activeClassName={s.active}>Search</NavLink>
                    <NavLink to="/Store" activeClassName={s.active}>Store</NavLink>
                </div>
        </div>)
}

export default Search;