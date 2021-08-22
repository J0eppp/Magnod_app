import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import monitorReducerEnhancer from "./redux/enhancers/monitorReducer";
import loggerMiddleware from "./redux/middleware/logger";
import rootReducer from "./redux/reducers";