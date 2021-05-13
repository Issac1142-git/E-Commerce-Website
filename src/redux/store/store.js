import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { onFetchCollectionsStart } from "./shop/shop.sagas";
import {
  onGoogleSigninStart,
  onEmailSigninStart,
  checkSession,
  signout,
  signup,
  signinAfterSignup,
} from "./user/user.sagas";
import { clearCartAfterSignout } from "./cart/cart.sagas";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

sagaMiddleware.run(onFetchCollectionsStart);
sagaMiddleware.run(onGoogleSigninStart);
sagaMiddleware.run(onEmailSigninStart);
sagaMiddleware.run(checkSession);
sagaMiddleware.run(signout);
sagaMiddleware.run(signup);
sagaMiddleware.run(signinAfterSignup);
sagaMiddleware.run(clearCartAfterSignout);
