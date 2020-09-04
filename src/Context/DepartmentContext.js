import createDataContext from './createDataContext';
import {v4 as uuidv4} from 'uuid';
import namor from 'namor';

const departmentReducer = (state, actions) => {
  switch (actions.type) {
    case 'add_error':
      return {...state, errorMessage: actions.payload};
    case 'fetch_department_list':
      return {};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    default:
      return state;
  }
};

function createRandomDepartments(n) {
  const departmentsArray = [];
  for (var i = 0; i < n; i++) {
    departmentsArray.push({
      id: uuidv4(),
      name: namor.generate({words: 1, numbers: 0}),
      inCharge: {
        id: uuidv4(),
        name: namor.generate({words: 2, numbers: 0}),
      },
      totalWorkers: Math.floor(Math.random() * 100),
      totalAssets: Math.floor(Math.random() * 100),
      totalSuperVisors: Math.floor(Math.random() * 25),
    });
  }
  return departmentsArray;
}

const departments = createRandomDepartments(80);

export const {Provider, Context} = createDataContext(
  departmentReducer,
  {},
  {departments, errorMessage: ''},
);
