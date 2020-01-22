import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  let nav = props.user ? (
    <div>
      <Link
        to=""
        className="flex-sm-fill text-sm-center nav-link"
        onClick={props.handlelogout}
      >
        LOG OUT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className="NavBar-welcome">WELCOME, {props.user.name}</span>
    </div>
  ) : (
    <div className="nav">
      <Link to="/" className="flex-sm-fill text-sm-center nav-link">
        Home
      </Link>
      <Link
        to="/AdminPage/main/create"
        className="flex-sm-fill text-sm-center nav-link"
      >
        ADD Main
      </Link>
      <Link
        to="/AdminPage/wine/create"
        className="flex-sm-fill text-sm-center nav-link"
      >
        ADD Wine
      </Link>
      <Link to="/AdminPage" className="flex-sm-fill text-sm-center nav-link">
        Admin
      </Link>
      <Link to="/login" className="flex-sm-fill text-sm-center nav-link">
        LOG IN
      </Link>

      <Link to="/signup" className="flex-sm-fill text-sm-center nav-link">
        SIGN UP
      </Link>
    </div>
  );
  // let nav = <div>something </div>;

  return <div className="navbar navbar-dark bg-dark">{nav}</div>;
};

export default NavBar;
