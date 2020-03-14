
import React from 'react';
import s from "./Events.module.css";
import EventItem from "./Event/EventItem";


const Events = (props)=> {
    return(
        <div className={s.event}>
            <h1>EVENTS!</h1>
            <EventItem eventData={props.eventData} />
        </div>)
}

export default Events;