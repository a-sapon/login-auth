import * as firebase from 'firebase/app';
import db from '../../config/fbConfig';

import api from '../../api/apiService';
import {
  loginRequest,
  loginSuccess,
  loginError,
  signupRequest,
  signupSuccess,
  signupError,
  refreshRequest,
  refreshSuccess,
  refreshError
} from './authActions';

export const signup = ({email, name, password}) => dispatch => {
  // console.log('email, password', typeof email, typeof password)
  dispatch(signupRequest());
  db.auth().createUserWithEmailAndPassword(email, password)
  .then(response => dispatch(loginSuccess(response)))
  .then(()=> db.firestore().collection('auth').add({email,  name}))
  .catch(e => dispatch(signupError(e)))
    .finally(() => dispatch(signupRequest()));
  // .then(response => dispatch(loginSuccess(response)))
    // .catch(e => dispatch(loginError(e)))
    // .finally(() => dispatch(loginRequest()));
};

export const login = ({email, password}) => dispatch => {
  dispatch(loginRequest());
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(response => dispatch(loginSuccess(response)))
  .catch(e => dispatch(loginError(e)))
  .finally(() => dispatch(loginRequest()));
  // .then(response => console.log('response', response.user))
};

export const reFresh = (token, data) => dispatch => {
  dispatch(refreshRequest());
  api
    .refreshSession(token, data)
    .then(response => dispatch(refreshSuccess(response)))
    .catch(e => dispatch(refreshError(e)))
    .finally(() => dispatch(refreshRequest()));
};

export const loginErr = () => dispatch => {
  dispatch(loginRequest());
  api
    .loginError()
    .then(e => dispatch(loginError(e)))
    .finally(() => dispatch(loginRequest()));
};
