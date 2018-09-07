import { applyMiddleware, createStore, compose} from 'redux';
import logger from 'redux-logger'
import rootReducer from '../reducers/rootReducer';

import createSagaMiddleware from "redux-saga";
//import { watcherSaga } from "../sagas/sagas";
import rootSaga from '../sagas/rootSaga';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(sagaMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(sagaMiddleware,logger);
  }
};

export const store = createStore(rootReducer,composeWithDevTools(getMiddleware()));
// run the saga
sagaMiddleware.run(rootSaga);


