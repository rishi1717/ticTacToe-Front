import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Button } from "@mui/material"

export default function UserNavBar() {
	const user = useSelector((state) => state.user.user)
	const navigate = useNavigate()
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Box
						sx={{
							display: "flex",
							justifyContent: "left",
							alignItems: "center",
							flexGrow: 1,
						}}
					>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={() => navigate("/profile")}
						>
							<AccountCircleRoundedIcon />
						</IconButton>
						<Typography
							variant="p"
							component="div"
							display={{ xs: "none", sm: "block" }}
						>
							{user.userName ? user.userName : user.guestId}
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
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
					{user.token ? (
						<Box
							sx={{
								display: "flex",
								justifyContent: "end",
								alignItems: "center",
								flexGrow: 1,
							}}
						>
							<Typography
								variant="p"
								component="div"
								display={{ xs: "none", sm: "block" }}
							>
								{user.walletAmount} Tics
							</Typography>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{ mr: 2 }}
								onClick={() => navigate("/wallet")}
							>
								<AccountBalanceWalletRoundedIcon />
							</IconButton>
						</Box>
					) : (
						<Box
							sx={{
								display: "flex",
								justifyContent: "end",
								alignItems: "center",
								flexGrow: 1,
							}}
						>
							<Button
								onClick={() => {
									navigate("/login")
								}}
								sx={{
									color: "white",
									backgroundColor: "primary",
								}}
							>
								Login
							</Button>
						</Box>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	)
}
