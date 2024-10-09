import { routerMiddleware } from 'connected-react-router';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory, createHashHistory } from 'history';

import createRootReducer from './modules';

// export const history = createBrowserHistory();
export const history = createHashHistory();

const initialState = {};
const enhancers = [];
const middleware = [routerMiddleware(history)];

function createStore() {
  const store = configureStore({
    reducer: createRootReducer(history),
    preloadedState: initialState,
    middleware,
    enhancers,
  });
  store.asyncReducers = {};
  store.injectReducer = (asyncReducer) => {
    store.asyncReducers = {
      ...store.asyncReducers,
      ...asyncReducer,
    };
    store.replaceReducer(createRootReducer(history, store.asyncReducers));
  };
  return store;
}

const store = createStore();
export default store;
