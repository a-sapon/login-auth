import db from '../config/fbConfig';
import { signupError } from '../redux/auth/authActions';

export default {
  login(data) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          user: data,
          token: 'login_token'
        });
      }, 1000);
    });
  },
  async signuprequest({email, password}) {
    console.log('email', email);
    console.log('email', email);
    const data = await db.auth().createUserWithEmailAndPassword(email, password);
    // await db.firestore().collection('auth').add({email, name});
    console.log('data', data)
    return data
  },
  loginError() {
    return new Promise(reject => {
      setTimeout(() => {
        reject({
          error: 'Custom Error :('
        });
      }, 1000);
    });
  },
  signupError(error) {
    return signupError(error)
  },
  refreshSession(token, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          user: data,
          token: token
        });
      }, 1000);
    });
  }
};
