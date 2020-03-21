
import React from 'react';
import s from "./Events.module.css";
import EventItem from "./Event/EventItem";

const Events = (props)=> {
    debugger
    let state = props.store.getState();
    return(
        <div className={s.event}>
            <h1>World Marathon Majors</h1>
            <EventItem eventData={state.eventPage.eventData} />
        </div>)
}

export default Events;