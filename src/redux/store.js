import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middleware = [thunk];

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : ""
    )
);
