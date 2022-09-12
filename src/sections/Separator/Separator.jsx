import { Box, Typography } from "@mui/material";

const Separator = ({backgroundColor, border, color, borderRadius, children}) => {
	return (
			<Box sx={{display:"flex", justifyContent:"center", backgroundColor, border, borderRadius}}>
				<Typography color={color} variant="h2" sx={{textAlign:"center", margin:"20px 0px"}}>
					{children}
				</Typography>
			</Box>
	)
}

export default Separator;