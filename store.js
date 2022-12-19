import { createStore ,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./Reducers/products";
import { CartReducer } from "./Reducers/cart";
const rootReducer=combineReducers({
productReducer,
CartReducer
})
export const store= createStore(rootReducer,applyMiddleware(thunk))