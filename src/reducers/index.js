import counterReducer from "./Counter";
import { combineReducers } from 'redux';
import todoReducer from "./Todo";

const allReducers = combineReducers({
  counterReducer,
  todoReducer
  //them nhieu reducer o day
});

export default allReducers;