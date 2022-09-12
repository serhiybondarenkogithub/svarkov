import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";


const Manufacture = () => {
	return (
		<Container sx={{mt:"24px", mb:"24px"}}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={8} sx={{alignSelf:"center"}}>
					<CardMedia component={"iframe"}
						width="760" 
						height="427" 
						src="https://www.youtube.com/embed/PR7yQ10Rijw" 
						title="Двускатный навес с покрытием профилированным поликарбонатом в селе Погребы Броварского района" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
						allowfullscreen
					/>
					
				</Grid>
				<Grid item xs={12} sm={4} sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start"}}>
					<Typography sx={{alignSelf:"center"}}>
						Наших клієнтів дуже часто цікавить, як виглядають наші конструкції на наших об'єктах. Саме тому ми ведемо відео-блог на нашому ютуб-каналі, де показуємо процес зсередини: від проекту до монтажу. Слідкуйте за нашими відео та отримуйте багато нової та цікавої інформації.
					</Typography>
					<Button color="primary" variant="contained" sx={{alignSelf:"center"}}>Більше відео</Button>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Manufacture;