import * as actionTypes from '../constants/shopping-types';
import axios from "axios";
export const addToCart = (itemID, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:8000/api/products/${itemID}`);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            imageURL: data.product.imageUrl,
            price: data.product.price,
            qty: qty
        },
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (itemID) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: itemID
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
};
export const clearCart = (dispatch) => {
    localStorage.removeItem("cart");
    return {
        type: actionTypes.REMOVE_FROM_CART
    }
    
    
}