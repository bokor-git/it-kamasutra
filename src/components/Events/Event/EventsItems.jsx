import React from 'react';
import s from "./../Events.module.css"


export const FullMarathonsItems = ({eventData, addEvent}) => {
    return <div><h1>On this page should be only Full Marathons but no filter yet, sorry... </h1>
        <div className={s.eventItem}>
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
    </div>
};
export const HalfMarathonsItems = ({eventData, addEvent}) => {
    return <div><h1>On this page should be only Half Marathons but no filter yet, sorry... </h1>
        <div className={s.eventItem}>
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
    </div>
};


export const AllEventsItems = ({eventData, addEvent}) => {
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
