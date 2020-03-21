const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export const followAC = (userID) => {return {type: FOLLOW, userID}};
export const unfollowAC = (userID) => {return {type: UNFOLLOW, userID}};
export const setUsersAC = (users) => {return {type: SET_USERS, users}};


let initialState = {
    users: [
        { likes: 1,
            id: 1,
            followed: false,
            photoURL: "https://www.w3schools.com/howto/img_avatar.png",
            fullName: "Bohdan Korol",
            status: "react junior developer",
            location: {city: "lutsk", country: "Ukraine"}
        },
        { likes: 1,
            id: 2,
            followed: true,
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoDem2quTGjJaESMoAdNsgf-NTuHnz0ORUbrtDOHjrv3otfjAj",
            fullName: "Florian Dirigl",
            status: "changemanager U11",
            location: {city: "Abensberg", country: "Germany"}
        },
        { likes: 3,
            id: 3,
            followed: false,
            photoURL: "https://png.pngtree.com/svg/20170308/508749a69e.png",
            fullName: "Duleba Andrii",
            status: "TPL IE VS 30 ",
            location: {city: "lutsk", country: "Ukraine"}
        }
    ]
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                }),
            };
        case SET_USERS:
            return {...state,
                users: [...state.users, ...action.users]};
        default:
            return state
    }
};

export default usersReducer;