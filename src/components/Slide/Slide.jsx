import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Slide({data}) {

  return (
    
    <Card sx={{ width: "100%", textAlign:"left" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440px"
          image={data.image}
          alt=""
          sx={{filter: "brightness(50%)"}}
        />

        
        <CardContent 
					sx={{position:"absolute", 
					top:"0", width:"90%", 
          display:"flex", 
					flexDirection:"column", justifyContent: "left"}}>
          <Typography color={"primary"} gutterBottom variant="h4" component="div" sx={{textShadow: "2px 2px 2px rgba(0,0,0,0.7)", paddingRight:"20px"}}>
            {data.heading}
          </Typography>
          <Typography color={"secondary"} variant="h6">
						{data.description} 
          </Typography>
          <ul>
            {data.list && data.list.map(item => (
              <Typography key={item} component={"li"} color={"secondary"} variant="body1" sx={{lineHeight:"2rem"}}>
                {item}
              </Typography>
            ))}
          </ul>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{position:"absolute", right:"20px", bottom:"20px"}}>
        <Button color="primary" variant="contained">
          Переглянути
        </Button>
      </CardActions>
    </Card>
  );
}