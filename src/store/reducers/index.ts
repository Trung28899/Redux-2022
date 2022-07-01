import { combineReducers } from "redux";
import bankReducer from "./bankReducers";

const reducer = combineReducers({
  bank: bankReducer,
});

export default reducer;
export type State = ReturnType<typeof reducer>;
