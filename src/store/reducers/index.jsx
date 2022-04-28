import { combineReducers } from "@reduxjs/toolkit";
import innoloft from "./innoloft";

const rootReducer = combineReducers({
  innoloft: innoloft,
});

export default rootReducer;
