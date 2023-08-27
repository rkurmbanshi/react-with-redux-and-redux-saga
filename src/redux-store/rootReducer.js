import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Import your userReducer
const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers here if needed
});

export default rootReducer;
