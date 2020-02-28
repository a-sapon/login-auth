import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import Navigation from './navigation/Navigation';
import Spinner from './spinner/Spinner';
import { connect } from 'react-redux';
import SignupPage from '../pages/SignUpPage';
import { getSpinner, getToken, getUserInfo } from '../redux/auth/authSelectors';
import Account from '../pages/Account';
import {reFresh} from '../redux/auth/authOperations';

class App extends Component {
  componentDidMount() {
    if(this.props.token) {
      this.props.reFresh(this.props.token, this.props.user)
    }
  }

  render() {
    return (
      <>
        {this.props.spinner && <Spinner />}

        <Navigation />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/account' component={Account} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
          <Redirect to='/' />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({
  spinner: getSpinner(state),
  token: getToken(state),
  user: getUserInfo(state)
});

export default connect(mapStateToProps, {reFresh})(App);
