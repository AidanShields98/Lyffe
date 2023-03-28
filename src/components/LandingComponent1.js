import React from "react";
import { Typography, Grid, Card, CardMedia } from "@material-ui/core";
import gym from '../assets/imgs/gym.jpg'

export const LandingComponent1 = () => {
  return (
    <div className="my-component">
    <Grid container>
      <Grid item xs={12} sm={6} className="image-container">
        <Card
         style={{ display: "flex", alignItems: "center", wdith: 750,  }}
        >
          <CardMedia
            component = "img"
            style={{ maxWidth: 1000, height: 500, position: "relative" }}
            image={gym}
            title="Placeholder"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} className="text-container">
        <Typography variant="h2" className="text-container2" gutterBottom>
          Component Title
        </Typography>
        <Typography className="text-p" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper elit non elit
          eleifend venenatis. Sed a luctus augue, ac feugiat lorem. Sed vestibulum turpis augue,
          quis aliquam risus tincidunt eu.
        </Typography>
      </Grid>
    </Grid>
  </div>
);
};

export default LandingComponent1;
