import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; // Create or import your reducers
import { rootSaga } from './redux-saga/rootSaga'; // Import your rootSaga

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.dispatch({ type: 'FETCH_USER_DATA_REQUEST', payload: 1 });

export default store;
