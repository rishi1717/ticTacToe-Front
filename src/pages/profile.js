import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Paper,
	Typography,
} from "@mui/material"
import React from "react"
import image from "../static/hacker.png"
import walletIcon from "../static/wallet.png"
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../redux/appSlice"
import { deleteUser } from "../redux/userSlice"

function Profile() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const appState = useSelector((state) => state.app)
	const user = useSelector((state) => state.user.user)
	return (
		<>
			<Navbar />
			<Container sx={{ mb: 4 }}>
				<Grid
					container
					spacing={0}
					alignItems="center"
					justifyContent="center"
					mt={{ xs: 1, sm: 3 }}
				>
					<Grid
						item
						alignItems="center"
						display="flex"
						justify="center"
						sx={{
							m: 2,
						}}
					>
						<Card
							elevation={10}
							sx={{
								maxHeight: 200,
								mt: 3,
								display: "flex",
								flexDirection: { xs: "row", sm: "row" },
								minHeight: { xs: 0, sm: 150 },
								px: { xs: 2, sm: 7 },
								py: { xs: 2, sm: 4 },
							}}
						>
							<Box
								component="div"
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									mr: { xs: 2, sm: 5 },
								}}
							>
								<CardMedia
									component="img"
									sx={{
										margin: "0.4rem",
										maxWidth: { xs: 80, sm: 150 },
										maxHeight: { xs: 80, sm: 150 },
										borderRadius: 100,
									}}
									src={image}
								/>
							</Box>
							<CardContent
								sx={{
									flex: 1,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: {
											xs: "1.2rem",
											sm: "1.6rem",
										},
										fontFamily: "monospace",
									}}
								>
									<b>Rishi R</b>
								</Typography>

								<Typography
									sx={{
										fontSize: {
											xs: "0.8rem",
											sm: "1.2rem",
										},
										fontFamily: "monospace",
									}}
								>
									<b>ihsir9991</b>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						alignItems="center"
						display="flex"
						justify="center"
						sx={{
							m: 2,
						}}
					>
						<Card
							elevation={10}
							sx={{
								maxHeight: 200,
								maxWidth: { xs: 250, sm: 500 },
								mt: { xs: 0, sm: 3 },
								display: "flex",
								flexDirection: { xs: "row", sm: "row" },
								minHeight: { xs: 0, sm: 150 },
								px: { xs: 2, sm: 7 },
								py: { xs: 2, sm: 4 },
							}}
						>
							<Box
								component="div"
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									mr: { xs: 2, sm: 5 },
								}}
							>
								<CardMedia
									component="img"
									sx={{
										margin: "0.4rem",
										maxWidth: { xs: 80, sm: 130 },
										maxHeight: { xs: 80, sm: 130 },
									}}
									src={walletIcon}
								/>
							</Box>
							<CardContent
								sx={{
									flex: 1,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: {
											xs: "1.2rem",
											sm: "1.6rem",
										},
										fontFamily: "monospace",
									}}
								>
									<b>Wallet</b>
								</Typography>

								{user.token ? (
									<>
										<Typography
											sx={{
												fontSize: {
													xs: "0.8rem",
													sm: "1.2rem",
												},
												fontFamily: "monospace",
											}}
										>
											<b>1000 TCoins</b>
										</Typography>
										<Button
											variant="containied"
											sx={{
												mt: 2,
												backgroundColor: "#4EADFE",
												color: "white",
												fontSize: { xs: "0.5rem", sm: "0.8rem" },
												"&:hover": {
													color: "#4EADFE",
												},
											}}
											onClick={() => {
												navigate("/wallet")
											}}
										>
											View Wallet
										</Button>
									</>
								) : (
									<>
										<Typography
											sx={{
												fontSize: {
													xs: "0.8rem",
													sm: "1.2rem",
												},
												fontFamily: "monospace",
											}}
										>
											<b>Login to access Wallet</b>
										</Typography>
										<Button
											variant="containied"
											sx={{
												mt: 2,
												backgroundColor: "#4EADFE",
												color: "white",
												fontSize: { xs: "0.5rem", sm: "0.8rem" },
											}}
											onClick={() => {
												navigate("/login")
											}}
										>
											Login
										</Button>
									</>
								)}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<Card
					elevation={10}
					sx={{
						m: "auto",
						mt: { xs: 3, sm: 5 },
						maxWidth: { xs: 250, sm: 1000 },
					}}
				>
					<Grid
						container
						spacing={0}
						alignItems="center"
						justifyContent="space-evenly"
						sx={{
							my: 3,
						}}
					>
						<Grid
							item
							alignItems="center"
							display="flex"
							justify="center"
							sx={{
								m: 2,
							}}
						>
							<Paper
								elevation={10}
								sx={{
									padding: 3,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: 32,
										color: "#4EADFE",
									}}
								>
									94
								</Typography>
								<Typography>Games Played</Typography>
							</Paper>
						</Grid>
						<Grid
							item
							alignItems="center"
							display="flex"
							justify="center"
							sx={{
								m: 2,
							}}
						>
							<Paper
								elevation={10}
								sx={{
									padding: 3,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: 32,
										color: "#4EADFE",
									}}
								>
									41
								</Typography>
								<Typography>Games Won</Typography>
							</Paper>
						</Grid>
						<Grid
							item
							alignItems="center"
							display="flex"
							justify="center"
							sx={{
								m: 2,
							}}
						>
							<Paper
								elevation={10}
								sx={{
									padding: 3,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: 32,
										color: "#4EADFE",
									}}
								>
									920
								</Typography>
								<Typography>Coins Earned</Typography>
							</Paper>
						</Grid>
						<Grid
							item
							alignItems="center"
							display="flex"
							justify="center"
							sx={{
								m: 2,
							}}
						>
							<Paper
								elevation={10}
								sx={{
									padding: 3,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: 32,
										color: "#4EADFE",
									}}
								>
									2
								</Typography>
								<Typography>Tournaments Won</Typography>
							</Paper>
						</Grid>
					</Grid>
				</Card>
				<Grid
					container
					spacing={0}
					alignItems="center"
					justifyContent="space-between"
					sx={{
						mt: 5,
					}}
				>
					<Grid item alignItems="center" display="flex" justify="center">
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
								Light Mode
							</Button>
						) : (
							<Button
								variant="contained"
								sx={{ backgroundColor: "black", mr: 1, fontSize: 10 }}
								onClick={() => {
									dispatch(setTheme(true))
								}}
							>
								Dark Mode
							</Button>
						)}
					</Grid>
					<Grid item alignItems="center" display="flex" justify="center">
						<Button>Edit Profile</Button>
					</Grid>
					<Grid item alignItems="center" display="flex" justify="center">
						<Button
							variant="contained"
							sx={{
								backgroundColor: "#A30000",
								color: "white",
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
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Profile
