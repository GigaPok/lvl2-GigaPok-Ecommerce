import { SET_TOKEN, SET_USER } from "./userActionsConst"

const initialState = {
    user: {},
    isLogginIn: false,
    isLoggedIn: false,
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

        default:

            return state
    }
}