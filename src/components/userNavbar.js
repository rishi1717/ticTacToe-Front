import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded"
import { Button } from "@mui/material"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setTheme } from "../redux/appSlice"
import { deleteUser } from "../redux/userSlice"
import { useNavigate } from "react-router-dom"

export default function UserNavBar() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const appState = useSelector((state) => state.app)
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
					
					{/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
					{appState.darkTheme ? (
						<Button
							variant="contained"
							sx={{
								backgroundColor: "white",
								color: "black",
								mr: 1,
								fontSize: 10,
							}}
							onClick={() => {
								dispatch(setTheme(false))
							}}
						>
							Light
						</Button>
					) : (
						<Button
							variant="contained"
							sx={{ backgroundColor: "black", mr: 1, fontSize: 10 }}
							onClick={() => {
								dispatch(setTheme(true))
							}}
						>
							Dark
						</Button>
					)}
					<Button
						variant="contained"
						sx={{
							backgroundColor: "white",
							color: "black",
							mr: 1,
							fontSize: 10,
						}}
						onClick={() => {
							dispatch(deleteUser())
							navigate("/")
						}}
					>
						Logout
					</Button>
					{/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
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
