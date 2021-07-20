import * as actionTypes from '../constants/product-types';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                done_loading: false,
                products:[]
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                done_loading: true,
                products: action.payload
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                done_loading: true,
                error: action.payload,
            };
        default:
            return state;
    }
};
export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {}
            }
        default:
            return state;
    }
}