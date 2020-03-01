
import React from 'react';
import s from "./Events.module.css";
import Event from "./Event/Event";
const Events = ()=> {
    return(
        <div className={s.event}>
            <h1>EVENTS!</h1>
            <Event name="music" date="next week"/>
            <Event name="football" date="today" price="20$"/>
        </div>)
}

export default Events;