import React from 'react';
import s from "./Event.module.css"




const EventItem =(props)=> {
        return <div className={s.event}>
            <h1>Events</h1>
            {props.eventData.map(ev => (<div>
                <img alt="0" src={ev.poster}/>
                <div>{ev.text}</div>
                <div>
                    <button id="addEvent" onClick={() => props.addEvent(ev.id,ev.text )}>
                        Accept
                        Event
                    </button>
                </div>

            </div>))
            }
        </div>

    }




export default EventItem;