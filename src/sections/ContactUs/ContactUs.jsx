import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const ContactUs = () => {
	return (
		<Container sx={{mt:"24px", mb:"24px"}}>
			<Typography sx={{alignSelf:"center", mb:"24px"}}>
				Якщо Ви хочете замовити якісні металеві конструкції під ключ у Києві та Київській області - тоді вам до нас! Команда професіоналів Сварков виготовляє металеві сходи, ковані та зварні перила, автомобільні навіси та навіси для дому, зварні вироби будь-якої конфігурації та складності.
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
					<Box sx={{display:"flex", alignItems:"center"}}>
						<LocalPhoneOutlinedIcon sx={{mr:"6px"}}/>
						<Typography variant="h3">
							067 877 0694
						</Typography>
					</Box>					
					<Box sx={{display:"flex", alignItems:"center", mb:"24px"}}>
						<LocalPhoneOutlinedIcon sx={{mr:"6px"}}/>
						<Typography variant="h3">
						 	067 323 6707
						</Typography>
					</Box>
					<Box sx={{display:"flex", alignItems:"center"}}>
						<EmailOutlinedIcon sx={{mr:"6px"}}/>
						<Typography variant="h3">
							svarkov.partner@gmail.com
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} sx={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
					<TextField fullWidth label="Ім'я" id="username" sx={{mb:"24px"}} />
					<TextField type="tel" fullWidth label="Телефон" id="phone" sx={{mb:"24px"}} />
					<TextField multiline minRows="3" fullWidth label="Що вас цікавить" id="question" sx={{mb:"24px"}} />
					<Box sx={{display:"flex", justifyContent:"right", width:"100%"}}>
						<Button color="primary" variant="contained" sx={{alignSelf:"center", mb:"24px"}}>Відправити</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default ContactUs;