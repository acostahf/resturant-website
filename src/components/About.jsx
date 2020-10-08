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
    textAlign: "start",
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
        <p className={classes.content}>
          A local run cafe in the heart of Austin, Texas. Started with the idea
          of making the best cafe for people of this town and at a quick rate.
        </p>
      </Container>
    </div>
  );
}
