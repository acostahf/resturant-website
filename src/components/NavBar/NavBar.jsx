import React from "react";
import { Link } from "react-router-dom";
// import "../../pages/App/App.css";
import "./NavBar.css";

const NavBar = props => {
  let nav = props.user ? (
    <div className="nav">
      <h1 className="NavBar-title">Cupcakes N Wine</h1>
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
      <Link
        to=""
        className="flex-sm-fill text-sm-center nav-link"
        onClick={props.handlelogout}
      >
        LOG OUT
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <h4 className="NavBar-welcome">WELCOME BACK, {props.user.name}</h4> */}
    </div>
  ) : (
    <div className="nav">
      <h1 className="NavBar-title">Cupcakes N Wine</h1>
      <Link to="/" className="flex-sm-fill text-sm-center nav-link">
        Home
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
