import createDataContext from './createDataContext';
import {v4 as uuidv4} from 'uuid';
import namor from 'namor';
const taskReducer = (state, actions) => {
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

function createRandomTasks(n) {
  const array = [];
  for (var i = 0; i < n; i++) {
    array.push({
      id: uuidv4(),
      title: namor.generate({words: 1, numbers: 0}),
      events: ((_) => {
        const random = Math.floor(Math.random() * 30);
        const eventsArray = [];
        for (let i = 0; i < random; i++) {
          eventsArray.push({
            title: namor.generate({words: 1, numbers: 0}),
          });
        }
      })(),
      status: ((_) => {
        const randomStatus = Math.floor(Math.random() * 3);
        switch (randomStatus) {
          case 0:
            return 'Online';
          case 1:
            return 'Offline';
          default:
            return 'Late';
        }
      })(),
      startTime: '⬤',
      endTime: '⬤',
      comment: namor.generate({
        words: Math.floor(Math.random() * 3),
        numbers: 0,
      }),
      departments: {
        id: uuidv4(),
        name: namor.generate({words: 1, numbers: 0}),
      },
      inCharge: {
        id: uuidv4(),
        firstName: namor.generate({words: 1, numbers: 0}),
        lastName: namor.generate({words: 1, numbers: 0}),
      },
      assignedWorkers: ((_) => {
        const random = Math.floor(Math.random() * 7);
        const workersArray = [];
        for (let i = 0; i < random; i++) {
          workersArray.push({
            id: uuidv4(),
            firstName: namor.generate({words: 1, numbers: 0}),
            lastName: namor.generate({words: 1, numbers: 0}),
          });
        }
      })(),
    });
  }
  return array;
}

const tasks = createRandomTasks(42);

export const {Provider, Context} = createDataContext(
  taskReducer,
  {},
  {tasks, errorMessage: ''},
);
