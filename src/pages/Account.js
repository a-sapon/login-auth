import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../redux/auth/authSelectors';

const Account = ({ user: { name = 'user', email } }) => (
  <>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </>
);

const mapStateToProps = state => ({
  user: getUserInfo(state)
});

export default connect(mapStateToProps)(Account);
