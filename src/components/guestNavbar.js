import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import { useNavigate } from "react-router-dom"

export default function GuestNavBar() {
	const navigate = useNavigate()
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={() => navigate("/profile")}
					>
						<AccountCircleRoundedIcon />
					</IconButton>
					<Typography
						variant="p"
						component="div"
						display={{ xs: "none", sm: "block" }}
					>
						Guestid
					</Typography>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, textAlign: "center" }}
					>
						TicTacToe
					</Typography>
					<Button
						onClick={() => {
							navigate("/login")
						}}
					>
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
