import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middleware = [thunk];

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware))
);
