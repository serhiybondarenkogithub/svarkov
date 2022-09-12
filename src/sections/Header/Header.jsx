import React from "react";
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, Divider, List, Button, ListItem, ListItemButton, ListItemText, Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import StyledHeader from "./HeaderStyles";
import Logo from "../../components/Logo/Logo";


const drawerWidth = 240;
const mainPageNavName = "Головна";
const navItems = [['gallery', 'Галерея'], ['technical-data', 'Технічні дані'], ['price', 'Ціни'], ['where-buy', 'Де купити'], ['about-us', 'Про нас']];

export default function Header(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

  return (
		<Grid item>
    <StyledHeader>
			<AppBar component="nav" className="appBar">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ flexGrow: 1 }}>
						<Logo />
					</Box>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map(item => {
							const [link, content] = item;
							return (
								<Button 
									sx={{color:"#fefefe", textShadow: "2px 2px 2px rgba(0,0,0,0.7)"}} 
									component={Link} 
									to={link} 
									key={content}
								>
									{content}
								</Button>
							)
						})}
					</Box>
				</Toolbar>
			</AppBar>

			<Box component="nav" sx={{ backgroundColor:"rgba(0,0,0,0.3)" }}>

				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						backgroundColor:"rgba(0,0,0,0.3)",
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:"rgba(255,255,255,0.7)" },
					}}
				>
					<Box onClick={handleDrawerToggle}>

						<Link to="/" style={{color: "black", textDecoration:"none"}}>
							<Typography variant="h6" sx={{ my: 2, paddingLeft:"16px" }}>
								{mainPageNavName}
							</Typography>
						</Link>

						<Divider />

						<List>
							{navItems.map(item => {
								const [link, content] = item;
								return (
									<ListItem disablePadding key={content}>
										<ListItemButton component={Link} to={link}>
											<ListItemText primary={content} />
										</ListItemButton>
									</ListItem>
								)
							})}
						</List>
					</Box>
				</Drawer>
			</Box>
  	</StyledHeader>
		</Grid>
  );
}