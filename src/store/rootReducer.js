import { combineReducers } from 'redux';
import user from './user/userReducer'
import cart from './cart/cartReducer'

const appReducer = combineReducers({
    user,
    cart,
});


export default appReducer;
