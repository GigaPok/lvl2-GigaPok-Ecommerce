import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./cartActionsConst"

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id,
    }
}


export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id,
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}