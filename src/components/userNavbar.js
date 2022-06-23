import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded"
import { useNavigate } from "react-router-dom"

export default function UserNavBar() {
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
						UserName
					</Typography>
					<Box
						sx={{
							display:'flex',
							justifyContent:'center',
							alignItems:'center',
							flexGrow: 1,
						}}
					>
						<Typography
							variant="h6"
							sx={{
								"&:hover": {
									cursor: "pointer",
								},
							}}
							onClick={() => {
								navigate("/")
							}}
						>
							TicTacToe
						</Typography>
					</Box>
					<Typography
						variant="p"
						component="div"
						display={{ xs: "none", sm: "block" }}
					>
						1000 Tics
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
