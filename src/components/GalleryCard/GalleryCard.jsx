import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const GalleryCard = ({data}) => {

	const { heading, image } = data;

  return (
    <Card sx={{"&:hover": {color:"#ed1c24"}}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h3">
            {heading}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default GalleryCard;