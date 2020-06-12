import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import cart from './cart';
import user from './user';


const logger = createLogger();

// cloud of all buckets/reducers
const rootReducer = combineReducers({
  cart,
  user,
});



export default applyMiddleware(thunk, logger)(createStore)(rootReducer);
