import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded"

export default function UserNavBar() {
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
					>
						<AccountCircleRoundedIcon />
					</IconButton>
					<Typography
						variant="p"
						component="div"
						display={{ xs: "none", sm: "block" }}
					>
						UserName
					</Typography>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, textAlign: "center" }}
					>
						TicTacToe
					</Typography>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<AccountBalanceWalletRoundedIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
