import React from "react";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    fontFamily: "Signika",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  content: {
    fontSize: "2rem",
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <h1>Contact Us</h1>
        <p className={classes.content}>Just come by.</p>
      </Container>
    </div>
  );
}
