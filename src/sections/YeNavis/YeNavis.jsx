import { Box, Card, CardActionArea, CardHeader, CardMedia, Container } from "@mui/material";

const YeNavis = () => {
	return (
		<Box component="main" sx={{ p: 3, display:"flex", flexDirection:"column", alignItems:"center"}}>
			<Container sx={{padding:{xs:"0px", sm:"inherit"}, mt:"80px"}}>
			<Card
				sx={{ width: "100%", marginBottom:"30px" }}
			>
				<CardActionArea>
					<CardHeader
						title="Про. Якість"
						sx={{position:"absolute", color:"white", textShadow: "2px 4px 3px rgba(0,0,0,0.3)", fontSize:"36px", left:"0", right:"0", backgroundColor:"rgba(0,0,0,0.3)"}}
						titleTypographyProps={{fontSize:"36px", textAlign:"center"}}
					/>
					<CardMedia
						component="img"
						height="500"
						image="/imgs/1.jpeg"  
						alt=""
					/>
				</CardActionArea>
			</Card>

			<Card
				sx={{ width: "100%", marginBottom:"30px" }}
			>
				<CardActionArea>
					<CardHeader
						title="Про. Кріплення"
						sx={{position:"absolute", color:"white", textShadow: "2px 4px 3px rgba(0,0,0,0.3)", fontSize:"36px", left:"0", right:"0", backgroundColor:"rgba(0,0,0,0.3)"}}
						titleTypographyProps={{fontSize:"36px", textAlign:"center"}}
					/>
					<CardMedia
						component="img"
						height="500"
						image="/imgs/2.jpeg"  
						alt=""
					/>
				</CardActionArea>
			</Card>

			<Card
				sx={{ width: "100%", marginBottom:"30px" }}
			>
				<CardActionArea>
					<CardHeader
						title="Про. Надійність"
						sx={{position:"absolute", color:"white", textShadow: "2px 4px 3px rgba(0,0,0,0.3)", fontSize:"36px", left:"0", right:"0", backgroundColor:"rgba(0,0,0,0.3)"}}
						titleTypographyProps={{fontSize:"36px", textAlign:"center"}}
					/>
					<CardMedia
						component="img"
						height="500"
						image="/imgs/3.jpeg"  
						alt=""
					/>
				</CardActionArea>
			</Card>

			<Card
				sx={{ width: "100%", marginBottom:"30px" }}
			>
				<CardActionArea>
					<CardHeader
						title="Про. Сучасність"
						sx={{position:"absolute", color:"white", textShadow: "2px 4px 3px rgba(0,0,0,0.3)", fontSize:"36px", left:"0", right:"0", backgroundColor:"rgba(0,0,0,0.3)"}}
						titleTypographyProps={{fontSize:"36px", textAlign:"center"}}
					/>
					<CardMedia
						component="img"
						height="500"
						image="/imgs/4.jpeg"  
						alt=""
					/>
				</CardActionArea>
			</Card>
			</Container>
		</Box>
	)
}

export default YeNavis;