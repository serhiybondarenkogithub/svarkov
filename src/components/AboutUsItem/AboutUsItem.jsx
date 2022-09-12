import { Box, Typography } from "@mui/material";

const AboutUsItem = ({icon, heading, children}) => {
	return (
		<Box sx={{display:"flex", mb:"24px"}}>
			{icon}
			<Box>
				<Typography variant="h3">
					{heading}
				</Typography>
				<Typography>
					{children}
				</Typography>
			</Box>
		</Box>
	)
}

export default AboutUsItem;