import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productReducer } from "./Reducers/products";
import { CartReducer } from "./Reducers/cart";
const reducer= {
productReducer,
CartReducer
}
const middleware = [thunk]
export const store= configureStore({
    reducer,middleware
})