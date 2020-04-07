
import React from 'react';
import EventItem from "./Event/EventItem";
import {addPostActionCreator, postLikeAC, updateNewPostTextActionCreator} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import PostItem from "../Posts/PostsItem/PostItem";
import {sendMassageCreator, updateNewMassageBodyCreator} from "../../Redux/dialog-reducer";
import {addEvent, addEventAC} from "../../Redux/events-reduser";



class EventItemContainerAPI extends React.Component{
    constructor() {
        super();
    }
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

