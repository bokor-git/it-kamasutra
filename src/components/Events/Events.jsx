
import React from 'react';
import s from "./Events.module.css";
import Event from "./Event/Event";
const Events = (props)=> {
    return(
        <div className={s.event}>
            <h1>EVENTS!</h1>
            <Event/>
        </div>)
}

export default Events;