import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

const Logo = () => {
	return (
		<Button component={Link} to="/">
			<Box
				component="img"
				alt="Логотип Сварков"
				src="/imgs/svarkov_logo.png"
				sx={{maxWidth: "120px"}}
			/>
	</Button>
	)
};

export default Logo;