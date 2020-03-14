
import React from 'react';
import s from "./Search.module.css";
const Search = ()=> {
    return(
        <div className={s.search}>
            <h1>Search Events</h1>
            <div>
                <textarea></textarea>
                <button onClick={()=> window.alert("Not found")}> Start search </button> </div>
        </div>)
}

export default Search;