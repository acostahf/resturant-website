import React, { useEffect, useState } from "react";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bar-pic.jpg"})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Signika",
  },
  icon: {
    color: "#fff",
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
    color: "#fff",
    flexGrow: 1,
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#fff",
    fontSize: "4rem",
  },
}));
export default function NavBar() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>401st Cafe</h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> 401st Cafe!
          </h1>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </div>
      </Collapse>
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
