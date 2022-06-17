import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material"
import React from "react"
import image from "../static/hacker.png"
import walletIcon from "../static/wallet.png"
import Navbar from "../components/navbar"

function Profile() {
	return (
		<>
			<Navbar />
			<Container>
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
										maxWidth: { xs: 80, sm: 150 },
										maxHeight: { xs: 80, sm: 150 },
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
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Profile
