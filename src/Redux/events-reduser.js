
let initialState = {
    eventData: [
        {id: 1, text: "Sumy Duathlon 27.5", poster: "https://sportevent.com.ua/image/t/250/250/img/1568/656.jpg"},
        {
            id: 1,
            text: "Blue Lake Cup Spring 2020",
            poster: "https://sportevent.com.ua/image/t/250/250/img/1574/662.png"
        },
        {
            id: 1,
            text: "Kharkiv Half Marathon 2020",
            poster: "https://sportevent.com.ua/image/t/250/250/img/1464/630.jpg"
        },
        {
            id: 1,
            text: "4th RAIN Mohrytsia Eco Trail 2020",
            poster: "https://sportevent.com.ua/image/t/250/250/img/1568/656.jpg"
        },
        {id: 1, text: "TRIATMAN IRON 2020"}
    ]
};
const eventsReducer = (state = initialState, action) => {
            return state
    };


export default eventsReducer;