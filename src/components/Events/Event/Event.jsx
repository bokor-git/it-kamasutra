
import React from 'react';
import s from "./Event.module.css";
const Event = (props)=> {
    return(
        <div>Events: play {props.name} {props.date} Price-{props.price} </div>)
}

export default Event;