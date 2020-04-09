import React from 'react';
import s from "./Event.module.css"

const EventItem = ({eventData, addEvent}) => {
    return <div className={s.event}>
        <h1>Events</h1>
        {eventData.map(ev => (<div>
            <img alt="0" src={ev.poster}/>
            <div>{ev.text}</div>
            <div>
                <button id="addEvent" onClick={() => addEvent(ev.id, ev.text)}>
                    Accept
                    Event
                </button>
            </div>
        </div>))
        }
    </div>
};


export default EventItem;