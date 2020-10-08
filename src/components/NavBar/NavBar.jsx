import React from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SortIcon from "@material-ui/icons/Sort";

import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
// import TabPanel from "@material-ui/core/TabPanel";
import { Link, withRouter } from "react-router-dom";
import About from "../About";
import { BrowserRouter as Router } from "react-router-dom";

// import "../../pages/App/App.css";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/ava-toast.jpg"})`,
    backgroundSize: "cover",
  },
  icon: {
    color: "black",
    fontSize: "2rem",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbar: {
    background: "none",
  },
  appbarTitle: {
    color: "black",
    flexGrow: 1,
  },
}));
export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>My Foodtruck</h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// const NavBar = (props) => {
//   let nav = props.user ? (
//     <div className="nav">
//       <h1 className="navbar-brand bg-dark">Cupcakes N Wine</h1>
//       <Link to="/" className="flex-sm-fill text-sm-center nav-link">
//         Home
//       </Link>
//       <Link
//         to="/AdminPage/main/create"
//         className="flex-sm-fill text-sm-center nav-link"
//       >
//         ADD Main
//       </Link>
//       <Link
//         to="/AdminPage/wine/create"
//         className="flex-sm-fill text-sm-center nav-link"
//       >
//         ADD Wine
//       </Link>
//       <Link to="/AdminPage" className="flex-sm-fill text-sm-center nav-link">
//         Admin
//       </Link>
//       <Link
//         to=""
//         className="flex-sm-fill text-sm-center nav-link"
//         onClick={props.handlelogout}
//       >
//         LOG OUT
//       </Link>
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       {/* <h4 className="NavBar-welcome">WELCOME BACK, {props.user.name}</h4> */}
//     </div>
//   ) : (
//     <div className="nav">
//       <h1 className="NavBar-title">Cupcakes N Wine</h1>
//       <Link to="/" className="flex-sm-fill text-sm-center nav-link">
//         Home
//       </Link>

//       <Link to="/login" className="flex-sm-fill text-sm-center nav-link">
//         LOG IN
//       </Link>

//       <Link to="/signup" className="flex-sm-fill text-sm-center nav-link">
//         SIGN UP
//       </Link>
//     </div>
//   );

//   return <div className="navbar sticky-top bg-white ">{nav}</div>;
// };

// export default NavBar;
