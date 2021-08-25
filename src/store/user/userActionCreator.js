import { LOGOUT, SET_TOKEN, SET_USER } from "./userActionsConst"

export const setUser = (user) => {
    return {
        type: SET_USER,
        user,
    }
}


export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        token,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}