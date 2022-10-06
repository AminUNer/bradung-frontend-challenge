import { combineReducers } from "@reduxjs/toolkit";
import recipesReducer from './recipesReducer';

const rootReducer = combineReducers({
    recipesReducer,
});

export default rootReducer;
