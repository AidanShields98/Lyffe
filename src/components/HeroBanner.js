import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import LoginButton from "./LoginButton";
import Logo from '../assets/imgs/logo.png';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hero: {
    background:
      'url("https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") no-repeat center center/cover',
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
  },
}));

export function HeroBanner() {
  const classes = useStyles();

  return (
    <div className="landing-root">
      <div className={classes.hero}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Welcome to Lyffe
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
           Lyffe app stuff will go here
          </Typography>
        </Container>
        <LoginButton />
      </div>
    </div>
  );
}

export default HeroBanner;
