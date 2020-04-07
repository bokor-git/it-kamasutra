import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = (props)=> {
    return(
        <div className={s.header}>
            <div className={s.headerText}>iRunner</div>

            {props.isAuth? <div className={s.login}><div> <div></div>{props.login}</div> <button onClick={()=>{props.singOutThunk()}}>logout</button></div>:
                <NavLink to={"/login"}>
            <div className={s.login}>Login</div>
        </NavLink>}
        </div>

    )
}

export default Header;