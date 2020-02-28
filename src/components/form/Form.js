import React, { Component } from 'react';
import { login, loginErr, signup } from '../../redux/auth/authOperations';
import { connect } from 'react-redux';
import styles from './Form.module.css';
import { withRouter } from 'react-router-dom';

const INITIAL_STATE = { email: '', password: '', name: '' };

class Form extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.history.location.pathname === '/signup'
      ? this.props.signup(this.state)
      : this.props.login({ email, password });
    this.setState({
      ...INITIAL_STATE
    })
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <div>
        <p>Please {this.props.history.location.pathname === '/signup' ? 'sign up!' : 'login!'}</p>
        <form onSubmit={this.handleSubmit} className={styles.loginForm}>
          {this.props.history.location.pathname === '/signup' && (
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          )}
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <button type='submit'>{this.props.history.location.pathname === '/signup' ? 'Sign Up' : 'Login'}</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { login, loginErr, signup })(withRouter(Form));
