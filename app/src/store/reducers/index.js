import { combineReducers } from "redux";
import { monstersReducer } from "./monsterReducer";
import { directoryReducer } from './directoryReducer';
import { classReducer } from './classReducer';
import { racesReducer } from './racesReducer';

export default combineReducers({
  classReducer, 
  directoryReducer,
  racesReducer,
  monstersReducer
});

