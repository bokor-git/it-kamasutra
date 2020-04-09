import React from 'react';
import EventItem from "./Event/EventItem";
import {connect} from "react-redux";
import {addEvent} from "../../Redux/events-reduser";



class EventItemContainerAPI extends React.Component{

    render() {
        return <EventItem eventData={this.props.eventData}
                          myEvents={this.props.myEvents}
                          addEvent={this.props.addEvent}/>
    }

}

let mapStateToProps = (state)=>{
    return {
        eventData: state.eventPage.eventData,
        myEvents: state.eventPage.myEvents,
    }
};


const EventContainer = connect(mapStateToProps, {addEvent})(EventItemContainerAPI);
export default EventContainer;

