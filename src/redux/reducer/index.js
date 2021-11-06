import {combineReducers} from "redux";
import { allStds } from "./stdreducer"; 

const Reducers=combineReducers({
    allStudent:allStds
});

export default Reducers