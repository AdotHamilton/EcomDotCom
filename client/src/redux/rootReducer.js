import { combineReducers } from "redux";
import cartReducer from './reducers/shopping-reducer';
import { getProductsReducer, getProductDetailsReducer } from "./reducers/product-reducer";
const rootReducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
});

export default rootReducer;