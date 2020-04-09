import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";
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
            return {
                ...state,
                ...action.data,
            };

        default:
            return state
    }
};

export const getAuthUserData = () => async (dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true))
        }
    }
;
export const singInThunk = (email, password) => async (dispatch) => {
    const response = await authAPI.login(email, password);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let action = stopSubmit("login", {_error: response.data.messages})
        dispatch(action)
    }
}
export const singOutThunk = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export default authReducer;