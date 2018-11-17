import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware ,compose } from 'redux';
import reducer from './reducers';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(rootSaga);


export default store;