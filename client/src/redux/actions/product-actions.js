import * as actionTypes from "../constants/product-types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST});

        const { data } = await axios.get("http://localhost:8000/api/products", {crossOrigin: true});
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        });
    }
};

export const getProductDetails = (itemID) => async (dispatch) =>{
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`http://localhost:8000/api/products/${itemID}`)
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        });
    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch ({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET,
    });
};