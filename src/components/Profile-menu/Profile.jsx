import React from 'react';
import s from "./Profile.module.css";
import {NavLink} from "react-router-dom";

const Profile = () => {
    return (
        <div className={s.profile}>
            <h3>Profile menu</h3>
            <img  src="https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"/>
            <h4><NavLink to="/Dialogs" activeClassName={s.active}>My Dialogs</NavLink></h4>
            <h4><NavLink to="/Posts" activeClassName={s.active}>My Posts</NavLink></h4>
            <h4><NavLink  to="/Profile" activeClassName={s.active}>Profile</NavLink></h4>
        </div>)
}

export default Profile;