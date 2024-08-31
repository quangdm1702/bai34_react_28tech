import counterReducer from "./Counter";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counterReducer
  //them nhieu reducer o day
});

export default allReducers;