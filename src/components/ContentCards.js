import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ContentCards( pages) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={pages.image}
        title="page image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pages.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pages.description}
        </Typography>
      </CardContent>
    </Card>
  );
}