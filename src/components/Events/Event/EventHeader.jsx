import React from 'react';
import s from "./../Events.module.css"

const EventHeader = (props) => {
    return <div className={s.eventHeader}>
        <span>Full Marathons</span>
        <span>Half Marathons</span>
        <span>10km Runs</span>
        <span>5km Runs</span>
    </div>
};


export default EventHeader;