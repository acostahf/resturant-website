import React from "react";

import { Button, Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/hero-pic.jpg"})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#414547",
    backgroundBlendMode: "overlay",
    // color: "#fff",
  },
  container: {
    minHeight: "50vh",

    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // alignContent: "flex-end",
    color: "#fff",
    // height: 500,
  },
  h1: {
    margin: 20,
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.content}>
          <Typography variant="h1" className={classes.h1}>
            EAT
          </Typography>
          <Typography variant="h1" className={classes.h1}>
            DRINK
          </Typography>
          <Typography variant="h1" className={classes.h1}>
            VISIT
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
