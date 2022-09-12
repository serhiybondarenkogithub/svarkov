import React from "react";
import { Box, Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';

export default function Footer() {
  return (
    <Box component="footer" sx={{ p: 3, backgroundColor: "rgba(0, 0, 0, 0.8)", display:"flex", justifyContent:"space-between", textShadow: "2px 4px 3px rgba(0,0,0,0.5)" }}>
      <Box>
        <Box sx={{display:"flex", alignItems:"center", color:"white"}}>
          <LocalPhoneIcon />
          <Typography>
            067 877 0694
          </Typography>
        </Box>
        <Box sx={{display:"flex", alignItems:"center", color:"white"}}>
          <PlaceIcon />
          <Typography>
            вулиця Слави, 19А, Княжичі, Київська обл., 07455
          </Typography>
        </Box>
      </Box>
      <Box sx={{textShadow: "2px 4px 3px rgba(0,0,0,0.5)"}}>
        <Typography sx={{color: "white", marginRight:"10px"}}>Слідкуйте за нами: </Typography>
        <Link href="https://www.facebook.com/SVARKOV/" sx={{cursor:"pointer", marginRight:"10px"}}>
          <FacebookIcon sx={{color:"white"}} />
        </Link>
        <Link href="https://www.instagram.com/svarkov.od.ua/" sx={{cursor:"pointer", marginRight:"10px"}}>
          <InstagramIcon sx={{color:"white"}} />
        </Link>
        <Link href="https://www.youtube.com/channel/UCWy-7h0OeEoKFmpgNqmvH7g" sx={{cursor:"pointer", marginRight:"10px"}}>
          <YouTubeIcon sx={{color:"white"}} />
        </Link>
      </Box>
    </Box>
  );
}