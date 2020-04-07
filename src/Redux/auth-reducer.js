import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
export const setAuthUserData = (userID, email, login, isAuth) => {
    return {type: SET_USER_DATA, data: {userID, email, login, isAuth}}
};

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data,
            };

        default:
            return state
    }
};

export const getAuthUserData = () => (dispatch) => {
        return authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true))
            }
        });
    }
;
export const singInThunk = (email, password) => (dispatch) => {
        authAPI.login(email, password).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let action = stopSubmit("login", {_error: response.data.messages})
                dispatch(action)
            }
        });
    }
export const singOutThunk = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
            console.log(response);
        });
    }
};
export default authReducer;