
import React from 'react';
import s from "./Event.module.css";

const Event = (props)=> {
    let eventData=[
        {id: 1, text: "Yo, get up"},
         {id: 1, text: "Yo, get up"},
         {id: 1, text: "Yo, get up"}
    ]
/*    let eventElement = eventData.map (
        e=> <Data text={e.text} />
        )*/

    return(
       <div> Event {eventData[0].id}</div>)
}

export default Event;