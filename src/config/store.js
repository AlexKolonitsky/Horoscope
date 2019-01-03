import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers/index';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
  // Always keep this middleware as last element
}

export default () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga);

  return { store };
};
