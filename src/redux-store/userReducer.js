const initialState = {
  users: [], // Initial state for the users array
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_USER_DATA_SUCCESS':
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case 'FETCH_USER_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default userReducer;
