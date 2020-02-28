import Type from './authTypes';

export const loginRequest = () => ({
  type: Type.LOGIN_REQUEST
});

export const loginSuccess = (data) => ({
  type: Type.LOGIN_SUCCESS,
  payload: data
});

export const loginError = (e) => ({
  type: Type.LOGIN_ERROR,
  payload: e
});

//-------------------------------------------
export const signupRequest = () => ({
  type: Type.SIGNUP_REQUEST
});

export const signupSuccess = (data) => ({
  type: Type.SIGNUP_SUCCESS,
  payload: data
});

export const signupError = (e) => ({
  type: Type.SIGNUP_ERROR,
  payload: e
});

export const logout = () => ({
  type: Type.LOGOUT
});

//------------------------------------

export const refreshRequest = () => ({
  type: Type.REFRESH_REQUEST
});

export const refreshSuccess = data => ({
  type: Type.REFRESH_SUCCESS,
  payload: data
});

export const refreshError = (e) => ({
  type: Type.REFRESH_ERROR,
  payload: e
});