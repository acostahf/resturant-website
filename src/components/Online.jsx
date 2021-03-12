import React from "react";
import { Container, Button, Typography, Box, Paper } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
    fontFamily: "Signika",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "start",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/takeout.jpg"})`,
    backgroundBlendMode: "hard-light",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#212121",
  },
  heading: {
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#34a3c2",
    color: "#ffffff",
    height: 50,
    width: 300,
    fontVariant: "bold",
  },
}));

const Online = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box p={5}>
        <Typography variant="h3" className={classes.heading}>
          To order online:
        </Typography>
      </Box>
      <Button
        variant="contained"
        className={classes.button}
        href="#contained-buttons"
      >
        ORDER NOW
      </Button>
    </div>
  );
};

export default Online;
