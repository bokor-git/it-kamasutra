import {profileAPI, userAPI} from "../api/api";

const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE"

export const setProfileDate = (profileData) => ({type: SET_USER_PROFILE, profileData});
export const setStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status});

let initialState = {
    profileData: null,
    status: ""
};

const myProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                profileData: action.profileData
            }
        }
        case SET_STATUS_PROFILE: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
};
export const getProfileInfo = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(
            response => {
                dispatch(setProfileDate(response.data))
            }
        )
    }
}

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(
            response => {
                dispatch(setStatusProfile(response.data))
            }
        )
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(
            response => {
                if (response.data.resultCode===0)
                dispatch(setStatusProfile(status))
            }
        )
    }
}

export default myProfileReducer;