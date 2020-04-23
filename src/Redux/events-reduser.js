const ADD_EVENT = "ADD_EVENT";


export const addEvent = (eventID, evText) => {
    return {type: ADD_EVENT, eventID:eventID, evText: evText}
};


let initialState = {
    eventData: [
        {   id: 1,
            text: "Trail Voskresinitska gora",
            poster: "https://androshchuk.com/wp-content/uploads/2019/10/trail-voskresinitska-gora.jpg"},
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
        },
        {   id: 5,
            text: "Sumy Duathlon 27.5",
            poster: "https://workua.kyivhalfmarathon.org/wp-content/uploads/sites/4/2019/12/IMG_20191205_140520_627.png"},
        {
            id: 6,
            text: "Blue Lake Cup Spring 2020",
            poster: "https://www.active.net.ua/wp-content/uploads/2017/10/RAIN-Mohrytsia-Eco-Trail-2020.jpg"
        },
        {
            id: 7,
            text: "Kharkiv International Marathon",
            poster: "https://www.active.net.ua/wp-content/uploads/2016/12/Kharkiv-International-Marathon.jpg"
        },
        {
            id: 8,
            text: "4th RAIN Mohrytsia Eco Trail 2020",
            poster: "https://androshchuk.com/wp-content/uploads/2019/10/kagamlyk-trail.jpg"
        },],
    myEvents: []
};
const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            state.eventData.map(i=>{
            if (action.eventID===i.id){
                state.myEvents.push(action.evText)
            }});
            return {
                ...state, myEvents: [...state.myEvents]
            };
        default:
            return state
    }

};
export default eventsReducer;