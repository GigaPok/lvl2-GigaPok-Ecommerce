import { login } from "../../services/auth"
import { setToken, setUser } from "./userActionCreator"

export const loginUser = (body) => (dispatch) => {

    login(body)
        .then(data => {
            if (data.errors) {
                console.log('erori');
            } else {
                dispatch(setUser(data.user))
                dispatch(setToken(data.token.access_token))
                localStorage.setItem('userInfo', JSON.stringify(data))
            }
        })
        .catch(error => console.log('err', error))
}

