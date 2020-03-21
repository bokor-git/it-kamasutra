
import React from 'react';
const EventDataItem = (props)=>{
    return <div>
        <div><img alt="0" src={props.poster}/> </div>
        {props.id} {props.text}
        <div>
            <button id="addEvent" onClick={()=> window.alert(`${props.text} Added in list My Events`)}> Accept Event</button></div></div>
}

const EventItem = (props)=> {
    debugger
let eventElement= props.eventData.map(ev =>
 <EventDataItem  poster={ev.poster} id={ev.id} text={ev.text}/>)
    return(
       <div> {eventElement}</div>)


}

export default EventItem;