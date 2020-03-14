
import React from 'react';
import s from "./Event.module.css";

const EventDataItem = (props)=>{
    return <div>
        <div><img src={props.poster}/> </div>
        {props.id} {props.text}
        <div>
            <button id="addEvent" onClick={()=> window.alert(`${props.text} Added in list My Events`)}> Accept Event</button></div></div>
}

const EventItem = (props)=> {
let eventElement= props.eventData.map(ev =>
 <EventDataItem  poster={ev.poster} id={ev.id} text={ev.text}/>)
    return(
       <div> {eventElement}</div>)


}

export default EventItem;