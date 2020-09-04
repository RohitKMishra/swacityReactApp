import createDataContext from './createDataContext';
import {v4 as uuidv4} from 'uuid';
import namor from 'namor';
const userReducer = (state, actions) => {
  switch (actions.type) {
    case 'add_error':
      return {...state, errorMessage: actions.payload};
    case 'fetch_user_list':
      return {};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    default:
      return state;
  }
};

function createRandomUsers(n) {
  const usersArray = [];
  for (var i = 0; i < n; i++) {
    usersArray.push({
      id: uuidv4(),
      firstName: namor.generate({words: 1, numbers: 0}),
      lastName: namor.generate({words: 1, numbers: 0}),
      userRole: Math.floor(Math.random() * 2) ? 'SuperVisor' : 'Worker',
      mobileNumber: Math.floor(Math.random() * 10000000000),
      userAvailableToday: Math.floor(Math.random() * 2) ? 'true' : 'false',
      department: {
        name: namor.generate({words: 1, numbers: 0}),
      },
    });
  }
  return usersArray;
}
users = createRandomUsers(56);

export const {Provider, Context} = createDataContext(
  userReducer,
  {},
  {users, errorMessage: ''},
);
