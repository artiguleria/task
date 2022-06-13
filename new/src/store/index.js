import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducers from "./reducers";
import AsyncStorage from '@react-native-community/async-storage';
let middlewares = [];

//for promises, since we are using axios for networking
middlewares.push(promise);

// for async operations, network calls
middlewares.push(thunk);

//smart console logging of actions
middlewares.push(logger);

// saves the current state of the application to localstorage for preventing state to be lost
function saveStateTOLocalStorage(state) {
  const serilizedState = JSON.stringify(state);

  AsyncStorage.setItem("state", serilizedState);
  
}

 async function loadFromLocalStorage() {
  const serilizedState = await AsyncStorage.getItem("state");
  if (serilizedState === null) return undefined;
  return typeof serilizedState === "object"
    ? serilizedState
    : JSON.parse(serilizedState);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

// create store
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(...middlewares))
);

store.subscribe(() => {
  saveStateTOLocalStorage(store.getState());
});

// export
export default store;