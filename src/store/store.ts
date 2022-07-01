import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

/*
    createStore is deprecated in redux
    The newest version requires us to use this instead: 

    import {configureStore} from "@reduxjs/toolkit"

    > See Basic Example in this link: 
    https://redux-toolkit.js.org/api/configureStore

    We can use the legacy_createStore as in this example

*/

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// composeEnhancers(applyMiddleware(thunk));

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
