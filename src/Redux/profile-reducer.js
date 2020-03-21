const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (newPost) => {
    return {type: UPDATE_NEW_POST_TEXT, newPost}
}


let initialState = {
    postData: [
        {
            id: 1,
            postText: "So, you want to have a really long race that eventually will attract the best runners from around the world. Unlike other races wute totaling somewhere around 24 to 26 miles",
            postLike: 2,
            postAvatar: "https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png"
        },
        {
            id: 2,
            postText: "In a nod to Greek history, the first marathon commemorated the run of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C.",
            postLike: 3,
            postAvatar: "https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png"
        },
        {
            id: 3,
            postText: "Despite the success of that first race, it took 13 more years of arguing before the International Amateur Athletic Federatio Olympics, there were six different distances.",
            postLike: 6,
            postAvatar: "https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png"
        }
    ],
    newPostText: "it-Kamasutra"
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                postText: state.newPostText,
                postLike: 1,
                postAvatar: "https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png"
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: " "
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPost
            };

        default:
            return state
    }
}
export default profileReducer;