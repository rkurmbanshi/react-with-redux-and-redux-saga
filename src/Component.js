import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Component() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  //Use useEffect to automatically fetch user data when users array is empty
  useEffect(() => {
    if (users  && users.length === 0) {
      dispatch({ type: 'FETCH_USER_DATA_REQUEST', payload: 1 });
      console.log("get users 2");
    }
    console.log("get users");
  }, [dispatch, users]);

  return (
    <div>
      <ul>
        { users && users.length > 0 && users.map(user => (
          <li key={user.id}>
            Name: {user.name}, Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Component;
