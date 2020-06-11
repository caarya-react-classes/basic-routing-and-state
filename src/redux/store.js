import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import cart from './cart';


const logger = createLogger();

// cloud of all buckets/reducers
const rootReducer = combineReducers({
  cart,
});



export default applyMiddleware(thunk, logger)(createStore)(rootReducer);
