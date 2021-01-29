import React from "react";

import { Container, Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // backgroundColor: "#246369",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",

    color: "#000",
    // padding: 50,
  },
  media: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  imgContainer: {
    display: "flex",

    justifyContent: "center",
  },

  box: {
    maxWidth: 600,
    maxHeight: 1000,
    padding: 50,
    margin: 0,
  },
  h1: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  items: {
    padding: 20,
  },
}));

const Entrees = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid xs={12} sm={12} md={6} lg={6} className={classes.imgContainer}>
            <Box className={classes.box}>
              <img
                className={classes.media}
                src="/assets/steak-pic.jpg"
                alt=""
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6}>
            <Box className={classes.content}>
              <Typography variant="h1" className={classes.h1}>
                Entrees
              </Typography>
              {props.mains.map((main) => (
                <Box className={classes.items} key={main._id}>
                  <Typography variant="h6">
                    {main.name} - {main.price}{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    {main.description}{" "}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Entrees;
