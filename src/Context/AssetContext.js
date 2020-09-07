import createDataContext from './createDataContext';
import {v4 as uuidv4} from 'uuid';
import namor from 'namor';
const assetReducer = (state, actions) => {
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

function createRandomAssets(n) {
  const assetsArray = [];
  for (var i = 0; i < n; i++) {
    assetsArray.push({
      id: uuidv4(),
      type: namor.generate({words: 1, numbers: 0}),
      status: ((_) => {
        const randomStatus = Math.floor(Math.random() * 3);
        switch (randomStatus) {
          case 0:
            return 'Online';
          case 1:
            return 'Offline';
          default:
            return 'Under Repair';
        }
      })(),
      condition: ((_) => {
        const randomCondition = Math.floor(Math.random() * 3);
        switch (randomCondition) {
          case 0:
            return 'Excellent';
          case 1:
            return 'Good';
          default:
            return 'Needs Service';
        }
      })(),
      department: {
        id: uuidv4(),
        name: namor.generate({words: 1, numbers: 0}),
      },
      inCharge: {
        id: uuidv4(),
        name: namor.generate({words: 2, numbers: 0}),
        
      },
      lastLocation: {},
    });
  }
  return assetsArray;
}

const assets = createRandomAssets(120);

export const {Provider, Context} = createDataContext(
  assetReducer,
  {},
  {assets, errorMessage: ''},
);
