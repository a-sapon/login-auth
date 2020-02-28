import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { connect } from 'react-redux';
import { getIsAuthUser, getFirstLetter } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authActions';

const Navigation = ({ isAuth, logout, letter }) => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        exact
        to='/'
        className={styles.navLink}
        activeClassName={styles.selected}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={styles.navLink}
        activeClassName={styles.selected}
      >
        About
      </NavLink>
      {isAuth && (
        <NavLink
          to='/account'
          className={styles.navLink}
          activeClassName={styles.selected}
        >
          Account
        </NavLink>
      )}
      {!isAuth ? (
        <>
          <NavLink
            to='/login'
            className={styles.navLink}
            activeClassName={styles.selected}
          >
            Login
          </NavLink>
          <NavLink
            to='/signup'
            className={styles.navLink}
            activeClassName={styles.selected}
          >
            Sign Up
          </NavLink>
        </>
      ) : (
        <>
          <button onClick={logout}>Log Out</button>
          {/* <div>{letter}</div> */}
        </>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuth: getIsAuthUser(state),
  // letter: getFirstLetter(state)
});

export default connect(mapStateToProps, { logout })(Navigation);
