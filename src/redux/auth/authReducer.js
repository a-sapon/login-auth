import { combineReducers } from 'redux';
import Type from './authTypes';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
    case Type.SIGNUP_SUCCESS:
      case Type.REFRESH_SUCCESS:
      return payload.user;
    case Type.LOGOUT:
      return null;
    default:
      return state;
  }
};

// const token = (state = null, { type, payload }) => {
//   switch (type) {
//     case Type.LOGIN_SUCCESS:
//     case Type.SIGNUP_SUCCESS:
//       case Type.REFRESH_SUCCESS:
//       return payload.token;
//     case Type.LOGOUT:
//       return null;
//     default:
//       return state;
//   }
// };

const error = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_ERROR:
    case Type.SIGNUP_ERROR:
    case Type.REFRESH_ERROR:
      return payload.message;
    default:
      return state;
  }
};

const isAuth = (state = false, { type }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
    case Type.SIGNUP_SUCCESS:
    case Type.REFRESH_SUCCESS:
      return true;
    case Type.LOGOUT:
      return false;
    default:
      return state;
  }
};

const spinner = (state = false, { type }) => {
  switch (type) {
    case Type.LOGIN_REQUEST:
    case Type.SIGNUP_REQUEST:
    case Type.REFRESH_REQUEST:
      return !state;
    default:
      return state;
  }
};

const userReducer = combineReducers({
  user,
  // token,
  error,
  isAuth,
  spinner
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'user']
};

export default persistReducer(persistConfig, userReducer);
