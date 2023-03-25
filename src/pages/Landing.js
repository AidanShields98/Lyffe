import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


export function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        <Container maxWidth="md">
          <Grid container className={classes.content}>
            <Grid item xs={12} sm={10} md={10}>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

