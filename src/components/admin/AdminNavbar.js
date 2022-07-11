import {
	AppBar,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useSelector } from "react-redux"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom"

const drawerWidth = 220
const navItems = ["DashBoard", "Users", "Tournaments", "Expenses"]

function AdminNavbar(props) {
	const navigate = useNavigate()
	const { window } = props
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				MUI
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton
							onClick={() => {
								navigate("/admin/" + item.toLowerCase())
							}}
							sx={{ textAlign: "center" }}
						>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined

	const admin = useSelector((state) => state.admin.admin)
	return (
		<>
			<AppBar position="static">
				<Toolbar
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: { xs: "", sm: "space-between" },
					}}
				>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						sx={{
							"&:hover": {
								cursor: "pointer",
							},
						}}
					>
						TicTacToe
					</Typography>
					{admin.token ? (
						<>
							<Box sx={{ display: { xs: "none", sm: "block" } }}>
								{navItems.map((item) => (
									<Button
										onClick={() => {
											navigate("/admin/" + item.toLowerCase())
										}}
										key={item}
										sx={{ color: "#fff" }}
									>
										{item}
									</Button>
								))}
							</Box>
						</>
					) : (
						<></>
					)}
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</>
	)
}

export default AdminNavbar
