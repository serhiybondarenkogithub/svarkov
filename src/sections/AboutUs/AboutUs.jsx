import { Box, Container, Grid, Typography } from "@mui/material";

import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';

import AboutUsItem from "../../components/AboutUsItem/AboutUsItem";

const AboutUs = () => {
	return (
		<Container sx={{mt:"24px", mb:"24px"}}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} sx={{alignSelf:"center"}}>
					<AboutUsItem 
						icon={<EventAvailableOutlinedIcon color="primary" fontSize={"large"} sx={{mt:"11px", mr:"24px"}}/>}
						heading={"Терміни виготовлення"}
					>
						Середній термін виготовлення кованих виробів: 10 – 21 робочий день. На термін впливає складність та насиченість елементами малюнків та наявності радіусних частин.
					</AboutUsItem>

					<AboutUsItem 
						icon={<MonetizationOnOutlinedIcon color="primary" fontSize={"large"} sx={{mt:"11px", mr:"24px"}}/>}
						heading={"Ціна"}
					>
						Гнучка система знижок для постійних клієнтів та нових замовників.
					</AboutUsItem>

					<AboutUsItem 
						icon={<CheckOutlinedIcon color="primary" fontSize={"large"} sx={{mt:"11px", mr:"24px"}}/>}
						heading={"Якість"}
					>
						Якість, яка служить уже понад 10 років. На всі наші роботи надаємо гарантію.
					</AboutUsItem>

					<AboutUsItem 
						icon={<BrushOutlinedIcon color="primary" fontSize={"large"} sx={{mt:"11px", mr:"24px"}}/>}
						heading={"Індивідуальний дизайн"}
					>
						Ми пропонуємо розробку індивідуального дизайну. Довіртеся нашому професійному дизайнеру та втіліть ваші мрії в реальність.
					</AboutUsItem>
				</Grid>
				<Grid item xs={12} sm={6} component="img" src={"/imgs/main_page/about_us.jpg"} sx={{borderRadius:"8px"}} />
			</Grid>
		</Container>
	)
}

export default AboutUs;