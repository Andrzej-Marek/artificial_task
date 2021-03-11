import { logger } from "redux-logger";
import { createStore, applyMiddleware, compose, Store } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { ReduxStore } from "./types";

const isDevelopmentMode = process.env.NODE_ENV === "development";

const middleware = [thunk.withExtraArgument({})];

const configureStoreDEV = (): Store<ReduxStore> =>
  createStore(rootReducer, compose(applyMiddleware(...middleware, logger)));

const configureStorePROD = (): Store<ReduxStore> =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const store: Store = isDevelopmentMode
  ? configureStoreDEV()
  : configureStorePROD();
