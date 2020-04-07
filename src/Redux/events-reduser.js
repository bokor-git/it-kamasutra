const ADD_EVENT = "ADD_EVENT";


export const addEvent = (eventID, evText) => {
    return {type: ADD_EVENT, eventID:eventID, evText: evText}
};


let initialState = {
    eventData: [
        {id: 1, text: "Sumy Duathlon 27.5", poster: "https://sportevent.com.ua/image/t/250/250/img/1568/656.jpg"},
        {
            id: 2,
            text: "Blue Lake Cup Spring 2020",
            poster: "https://sportevent.com.ua/image/t/250/250/img/1574/662.png"
        },
        {
            id: 3,
            text: "Kharkiv Half Marathon 2020",
            poster: "https://sportevent.com.ua/image/t/250/250/img/1464/630.jpg"
        },
        {
            id: 4,
            text: "4th RAIN Mohrytsia Eco Trail 2020",
            poster: "https://sportevent.com.ua/image/t/250/250/img/1568/656.jpg"
        },],
    myEvents: []

};
const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            state.eventData.map(i=>{
            if (action.eventID===i.id){
                state.myEvents.push(action.evText)
            }})
            return {
                ...state, myEvents: [...state.myEvents]
            };
        default:
            return state
    }

};
export default eventsReducer;