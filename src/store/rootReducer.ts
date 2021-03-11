import { combineReducers, Reducer } from "redux";
import { askHnThredReducer } from "./askHNThred/askHNThred.reducer";

export const rootReducer: Reducer = combineReducers({
  askHNThred: askHnThredReducer,
});
