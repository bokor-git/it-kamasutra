import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = ({isAuth, login, singOutThunk})=> {
    return(
        <div className={s.header}>
            <div className={s.headerText}>iRunner</div>

            {isAuth? <div className={s.login}><div> <div></div>{login}</div> <button onClick={()=>{singOutThunk()}}>logout</button></div>:
                <NavLink to={"/login"}>
            <div className={s.login}>Login</div>
        </NavLink>}
        </div>

    )
}

export default Header;