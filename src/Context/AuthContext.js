import createDataContext from './createDataContext';
import {AsyncStorage} from 'react-native';
import EduficationApi from '../api/EduficationApi';
import {navigate} from '../navigationRef';

const authReducer = (state, actions) => {
  switch (actions.type) {
    case 'add_error':
      return {...state, errorMessage: actions.payload};
    case 'signin':
      return {errorMessage: '', token: actions.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'signout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({type: 'signin', payload: token});
      navigate('mainflow');
    } else {
      navigate('Teacherprofile');
    }
  };
};

const signup = (dispatch) => {
  return async ({email, password}) => {
    try {
      const response = await EduficationApi.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});

      navigate('mainFlow');
    } catch (err) {
      dispatch({type: 'add_error', payload: 'something went wrong'});
    }
  };
};
const signin = (dispatch) => {
  return async ({email, password}) => {
    try {
      const response = await EduficationApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      navigate('mainFlow');
    } catch (err) {
      dispatch({type: 'add_error', payload: 'Something Went Wrong'});
    }
  };
};
const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({type: 'clear_error_message'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup, signout, clearErrorMessage, tryLocalSignin},
  {token: null, errorMessage: ''},
);
