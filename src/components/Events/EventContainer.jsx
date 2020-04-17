import React from 'react';
import EventItem from "./Event/EventItem";
import {connect} from "react-redux";
import {addEvent} from "../../Redux/events-reduser";
import s from "./Events.module.css";
import EventHeader from "./Event/EventHeader";
import EventFilter from "./Event/EventFilter";


class EventItemContainerAPI extends React.Component {
    render() {
        return <div className={s.eventContent}>
            <EventFilter/>
            <EventHeader/>
            <EventItem eventData={this.props.eventData}
                       myEvents={this.props.myEvents}
                       addEvent={this.props.addEvent}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        eventData: state.eventPage.eventData,
        myEvents: state.eventPage.myEvents,
    }
};


const EventContainer = connect(mapStateToProps, {addEvent})(EventItemContainerAPI);
export default EventContainer;

