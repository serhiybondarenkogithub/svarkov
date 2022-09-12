import { Box, Button, Container, TextField } from "@mui/material";

const MainForm = () => {
	return (
		<Container sx={{mt:"24px"}}>
        <TextField fullWidth label="Ім'я" id="username" sx={{mb:"24px"}} />
        <TextField type="tel" fullWidth label="Телефон" id="phone" sx={{mb:"24px"}} />
        <TextField fullWidth label="Що вас цікавить" id="question" sx={{mb:"24px"}} />
				<Box sx={{display:"flex", justifyContent:"right"}}>
					<Button color="primary" variant="contained" sx={{alignSelf:"center", mb:"24px"}}>Відправити</Button>
				</Box>
		</Container>
	);
}

export default MainForm;