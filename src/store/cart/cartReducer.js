import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./cartActionsConst"

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
}

const updateCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));

    return cart;
}

export default function cartReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TO_CART:
            const cart = state.cart.filter(id => id !== action.id);
            return {
                ...state,
                cart: updateCart([
                    ...cart,
                    action.id
                ]),
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: updateCart(state.cart.filter(item => item.id !== action.id))
            }
        case CLEAR_CART:
            return {
                ...state,
                cart: updateCart([])
            }

        default:

            return state
    }
}