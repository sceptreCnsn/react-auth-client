import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const { data } = await axios.post(
      'http://localhost:3090/signup',
      formProps
    );
    dispatch({ type: AUTH_USER, payload: data.token });
    localStorage.setItem('token', data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: e.response.data.error });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try{
    const { data } = await axios.post(
      'http://localhost:3090/signin',
      formProps
    );
    dispatch({ type: AUTH_USER, payload: data.token });
    localStorage.setItem('token', data.token);
    callback();
  }
  catch(e){
    dispatch({ type: AUTH_ERROR, payload: e.response.data.error });
  }
}

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  }
};
