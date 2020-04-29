import React from 'react';
import s from "./../Events.module.css"


export const FullMarathonsItems = ({eventData, addEvent}) => {
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(e=>e.type==="full").map(ev => (<div>
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

export const Marathons5kmItems = ({eventData, addEvent}) => {
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(e=>e.type==="5km").map(ev => (<div>
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
export const Marathons10kmItems = ({eventData, addEvent}) => {
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(e=>e.type==="10km").map(ev => (<div>
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
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(e=>e.type==="half").map(ev => (<div>
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
