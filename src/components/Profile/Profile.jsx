import React from 'react';
import s from "./Profile.module.css";
import {NavLink} from "react-router-dom";

const Profile = () => {
    return (
        <div className={s.profile}>
            <h1>Profile menu</h1>
            <h4><NavLink to="/Dialogs" activeClassName = {s.active}> Dialogs</NavLink></h4>
            <h4><NavLink to="/Events" activeClassName = {s.active}>Events</NavLink></h4>
            <h4> <NavLink to="/Posts" activeClassName={s.active}>Posts</NavLink> </h4>
            </div>)
}

export default Profile;