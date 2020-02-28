export const getIsAuthUser = state => state.authReducer.isAuth;
export const getUserInfo = state => state.authReducer.user;
export const getSpinner = state => state.authReducer.spinner;
export const getFirstLetter = state => state.authReducer.user && state.authReducer.user.email[0].toUpperCase();
export const getToken = state => state.authReducer.token;