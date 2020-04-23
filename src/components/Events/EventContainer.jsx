import React from 'react';
import {AllEventsItems, FullMarathonsItems, HalfMarathonsItems,} from "./Event/EventsItems";
import {connect} from "react-redux";
import {addEvent} from "../../Redux/events-reduser";
import s from "./Events.module.css";
import EventHeader from "./Event/EventHeader";
import EventFilter from "./Event/EventFilter";
import {Route, Switch} from "react-router-dom";


class EventItemContainerAPI extends React.Component {
    render() {
        return <div className={s.eventContent}>
            <EventFilter/>
            <EventHeader/>
            <div className="events-content">
                <Switch>
                    <Route exact path="/Events" render={() => (<AllEventsItems {...this.props}/>)}/>
                    <Route exact path="/Events/Full-Marathons" render={() => (<FullMarathonsItems {...this.props}/>)}/>
                    <Route exact path="/Events/Half-Marathons" render={() => (<HalfMarathonsItems {...this.props}/>)}/>
                </Switch>
            </div>
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

