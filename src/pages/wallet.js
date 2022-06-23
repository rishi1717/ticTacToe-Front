import {
	Button,
	Container,
	Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material"
import React from "react"
import Navbar from "../components/navbar"

function Wallet() {
	return (
		<>
			<Navbar />
			<Container
				sx={{
					mt: 3,
				}}
			>
				<Typography
					sx={{
						fontSize: { xs: 16, sm: 32 },
						color: "#4EADFE",
						textAlign: "center",
						mb: 2,
					}}
				>
					Wallet
				</Typography>
				<Paper
					elevation={10}
					sx={{
						p: { xs: 1, sm: 3 },
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Paper
						elevation={0}
						sx={{
							backgroundColor: "#FFF7D0",
							color: "#171717",
							width: "60%",
							p: 0.1,
							textAlign: "center",
							display:'flex',
							flexDirection:{xs:'column',sm:'row'},
							justifyContent:'space-around'
						}}
					>
						<Typography sx={{fontSize:12}}>1 Rs = 1 Tic</Typography>
						<Typography sx={{fontSize:12}}>Min Amount = 10 Rs</Typography>
						<Typography sx={{fontSize:12}}>Min Withdraw = 20 Rs</Typography>
					</Paper>
					<Grid
						container
						spacing={0}
						alignItems="center"
						justifyContent="center"
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Grid
							item
							container
							spacing={0}
							width={{ xs: "100%", sm: "40%" }}
							alignItems="center"
							justifyContent="center"
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
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
								<Typography
									sx={{
										fontSize: { xs: 16, sm: 26 },
										color: "#9d9d9d",
									}}
								>
									Coins in Wallet :
								</Typography>
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
								<Typography
									sx={{
										fontSize: { xs: 22, sm: 32 },
									}}
								>
									1000 Tics
								</Typography>
							</Grid>
							<Grid
								container
								spacing={0}
								alignItems="center"
								justifyContent="center"
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
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
									<Typography
										sx={{
											fontSize: { xs: 16, sm: 26 },
											color: "#9d9d9d",
										}}
									>
										Withdrawable :
									</Typography>
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
									<Typography
										sx={{
											fontSize: { xs: 22, sm: 32 },
										}}
									>
										800 Rs
									</Typography>
								</Grid>
							</Grid>
						</Grid>

						<Grid
							item
							container
							width={{ xs: "100%", sm: "40%" }}
							spacing={0}
							alignItems="center"
							justifyContent="center"
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
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
								<TextField label="Enter Amount" variant="outlined" />
								<Button
									sx={{
										marginLeft: 3,
										backgroundColor: "#4DACFC",
										color: "white",
										"&:hover": {
											color: "#4DACFC",
										},
									}}
								>
									Add Coins
								</Button>
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
								<TextField label="Enter Amount" variant="outlined" />
								<Button
									sx={{
										marginLeft: 3,
										backgroundColor: "#4DACFC",
										color: "white",
										"&:hover": {
											color: "#4DACFC",
										},
									}}
								>
									Withdraw
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
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
							<Typography>Total Winnings</Typography>
							<Typography
								sx={{
									fontSize: 32,
									color: "#4EADFE",
								}}
							>
								1200
							</Typography>
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
							<Typography>Amount Spent</Typography>
							<Typography
								sx={{
									fontSize: 32,
									color: "#4EADFE",
								}}
							>
								1400
							</Typography>
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
							<Typography>Referal Bonus</Typography>
							<Typography
								sx={{
									fontSize: 32,
									color: "#4EADFE",
								}}
							>
								120
							</Typography>
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
							<Typography>Get 20 Coins</Typography>

							<Button
								sx={{
									mt: 2,
									backgroundColor: "#4DACFC",
									color: "white",
									fontSize: 12,
									"&:hover": {
										color: "#4DACFC",
									},
								}}
							>
								Invite a Friend
							</Button>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Wallet
