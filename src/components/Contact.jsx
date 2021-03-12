import React from "react";
import Container from "@material-ui/core/Container";
// import {
//   FormControl,
//   FormLabel,
//   FormHelperText,
//   TextField,
// } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
    fontFamily: "Signika",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    textAlign: "start",
    background: "#212121",
  },
  content: {
    fontSize: "2rem",
  },
  container: {
    // background: "#90a  4ae",
    paddingTop: 50,
    height: "50vh",
    // margin: theme.spacing(1),
    color: "white",
    margin: "100px",
  },
  ptag: {
    marginBottom: 0,
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="md">
        <h1>Contact Us</h1>
        <p>
          (512) 111 - 1111 <br /> something@gmail.com
        </p>
        <h1>Location</h1>
        <p>
          123 Everywhere <br /> Austin, TX 78702{" "}
        </p>
        <h1>Hours</h1>
        <p className={classes.ptag}>
          Mon - Thu, 8am - 10pm <br /> Frod - Sun, 8am - 10pm
        </p>
      </Container>
    </div>
  );
};

export default Contact;
