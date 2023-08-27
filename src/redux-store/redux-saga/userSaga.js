import { takeEvery, put, select } from 'redux-saga/effects'; // Import select from redux-saga/effects

function* fetchUserData(action) {
  const users = yield select(state => state.user.users);

  if (users.length === 0) {
    try {
      //const response = yield call(fetch, `https://jsonplaceholder.typicode.com/users/${action.payload}`);
      //const data = yield call([response, 'json']);
      const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
        // Add more dummy users here
      ];
      console.log("fetchUserData saga");
      yield put({ type: 'FETCH_USER_DATA_SUCCESS', payload: data });
    } catch (error) {
      yield put({ type: 'FETCH_USER_DATA_FAILURE', error: error.message });
    }
  }
}

export function* userSaga() {
  yield takeEvery('FETCH_USER_DATA_REQUEST', fetchUserData);
}
