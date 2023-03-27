import React from "react";
import { Typography, Grid, Card, CardMedia } from "@material-ui/core";
import gym from '../assets/imgs/gym.jpg';
export const LandingComponent1 = () => {
  return (
    <div className="my-component">
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6} className="image-container">
        <Card>
          <CardMedia
            className="comp-media"
            image={gym}
            title="Placeholder"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} className="text-container">
        <Typography variant="h2" component="h2" gutterBottom>
          Component Title
        </Typography>
        <Typography variant="body1" gutterBottom>
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
