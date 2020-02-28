import React, { Component } from 'react';
import Form from '../components/form/Form';
import { connect } from 'react-redux';
import { getIsAuthUser } from '../redux/auth/authSelectors';

class LoginPage extends Component {
  state = {  }

  componentDidMount() {
    this.props.isAuth && this.props.history.replace('/');
  }

  componentDidUpdate() {
    this.props.isAuth && this.props.history.replace('/');
  }

  render() {
    console.log('this.props', this.props)
    return (
      <Form />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: getIsAuthUser(state)
})

export default connect(mapStateToProps)(LoginPage);