import React from 'react';
import s from "./../Events.module.css"

const EventItem = ({eventData, addEvent}) => {
    return <div className={s.eventItem}>
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