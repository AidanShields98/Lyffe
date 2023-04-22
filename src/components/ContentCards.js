import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ContentCards(props) {
  const { pages } = props;
  return (
    <Card sx={{ maxWidth: 600, margin: 1 }}>
      <CardMedia
        sx={{ height: 300, objectFit: "contain" }}
        image={pages.image}
        title="page image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='content-title'>
          {pages.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='content-description'>
          {pages.description}
        </Typography>
      </CardContent>
    </Card>
  );
}