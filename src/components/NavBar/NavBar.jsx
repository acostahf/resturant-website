import React from "react";
import {
  Button,
  Slide,
  useScrollTrigger,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
// import About from "../About";
// import { BrowserRouter as Router } from "react-router-dom";

// import "../../pages/App/App.css";
import "./NavBar.css";

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "flex",
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
  },
  appbar: {
    background: "none",
  },
  button: {
    color: "#fff",
  },
}));

export default function HideAppBar(props) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar>
            <Link
              href="/"
              onClick={preventDefault}
              className={classes.title}
              style={{ textDecoration: "none" }}
            >
              <Typography variant="h6">Hattrem</Typography>
            </Link>
            <Button component={Link} to="/" className={classes.button}>
              Home
            </Button>
            <Button component={Link} to="/" className={classes.button}>
              Gallery
            </Button>
            <Button component={Link} to="/" className={classes.button}>
              Story{" "}
            </Button>
            <Button component={Link} to="/" className={classes.button}>
              Visit{" "}
            </Button>
            <Button component={Link} to="/" className={classes.button}>
              Login{" "}
            </Button>
            <Button className={classes.button}>
              <InstagramIcon fontSize="small" />
            </Button>
            <Button className={classes.button}>
              <TwitterIcon fontSize="small" />
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
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
