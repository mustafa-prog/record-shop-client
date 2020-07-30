import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, withRouter } from 'react-router-dom';

import {
  faBars,
  faRecordVinyl,
  faUserInjured,
  faBaby,
  faUserAstronaut,
  faBlenderPhone,
  faCarrot
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';

import appContext from '../contexts/appContext';
import appFunctionsContext from '../contexts/appFunctionsContext';

import friend from '../assets/friend.gif';


const Navigation = props => {
  const active = {
    color: '#6bc774'
  };

  const toggleSidebar = evt => {
    console.log('toggle!!!!')
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('slide-right');
  };

  

  const { isLoggedIn, user } = useContext(appContext);

  const { setIsLoggedIn, setAuth } = useContext(appFunctionsContext);

  const handleLogout = evt => {
    toggleSidebar()
    setIsLoggedIn(false);
    setAuth(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    props.history.push('/');
  }

  return (
    <React.Fragment>
      <div id="navigation" className="flex-row-space-between navColor">
        <div className="left flex-row-center">
          <div id="burger">
            <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
          </div>
          <div id="logo">
            <NavLink to="/">
              BABYLON RECORDS
            </NavLink>
          </div>
        </div>
        { isLoggedIn && (
        <div className="right flex-row-center">
          <div className="name">
          <p>{user.fullName}</p>
          </div>
          <div className="avatar">
            <img src={friend} alt="img" />
          </div>
        </div>
      )}
      </div>
      <div id="sidebar" className="navColor">
        <div className="menu-item">
          <NavLink to="/dashboard" activeStyle={active}>
            <FontAwesomeIcon icon={faCarrot} />
            Dashboard
            </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/">
            <FontAwesomeIcon icon={faRecordVinyl} />
            About Us
        </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/">
            <FontAwesomeIcon icon={faBlenderPhone} />
            Contact
          </NavLink>
        </div>
        <div className="divider"></div>
        { isLoggedIn ? (
        <div className="menu-item">
          <NavLink to="" onClick={handleLogout}>
            <FontAwesomeIcon icon={faBaby} />
              Log out
          </NavLink>
        </div>
        ) : (
        <React.Fragment>
          <div className="menu-item">
            <NavLink to="/login" activeStyle={active} onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faUserInjured} />
                Login
                </NavLink>
          </div>
          <div className="menu-item">
            <NavLink to="/signup" activeStyle={active} onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faUserAstronaut} />
                Sign up
              </NavLink>
          </div>
        </React.Fragment>
        )}
        <div className="divider"></div>
        <div className="menu-item social">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faDiscord} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default withRouter(Navigation);
