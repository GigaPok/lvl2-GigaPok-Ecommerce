import { LOGOUT, SET_TOKEN, SET_USER } from "./userActionsConst"

const initialState = {
    user: {},
    token: ''
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {

        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case LOGOUT:
            return {
                ...state,
                user: {},
                token: '',
            }

        default:

            return state
    }
}