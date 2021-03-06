import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <MUIDrawer variant = "permanent">
    {/* <div className="nav"> */}
      {/* <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link> */}
      <List>
        {/* {["Home", "Requests", "Create Letter"].map((text, index)=>
        )} */}
      </List>
      {/* <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>
        {user.id && (
          <>
            <Link className="navLink" to="/list">
              Requests
            </Link>
          </>
        )}
        {user.id && (
          <>
            <Link className="navLink" to="/create">
              Create Letter
            </Link>
          </>
        )}
        {user.id && (
          <>
            <Link className="navLink" to="/info">
              Info Page
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div> */}
    {/* </div> */}
    </MUIDrawer>
  );
}

export default Nav;
