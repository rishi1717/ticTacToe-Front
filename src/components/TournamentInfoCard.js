import { Grid, Paper, Typography } from "@mui/material"
import React from "react"

function TournamentInfoCard({ tournament }) {
	return (
		<>
			<Paper
				sx={{
					padding: "1rem",
					margin: "1rem",
					borderRadius: "1rem",
					width: { xs: "100", md: "70%" },
				}}
			>
				<Grid
					container
					spacing={3}
					sx={{
						display: "flex",
						justifyContent: "space-evenly",
					}}
				>
					<Grid item>
						<Paper
							elevation={10}
							sx={{
								p: 2,
							}}
						>
							<Typography
								sx={{
									display: "flex",
									justifyContent: "center",
									color: "#90CAF9",
								}}
							>
								Players
							</Typography>
							<Typography
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								{tournament.playersJoined}/{tournament.noOfPlayers}
							</Typography>
						</Paper>
					</Grid>
					<Grid item>
						<Paper
							elevation={10}
							sx={{
								p: 2,
							}}
						>
							<Typography
								sx={{
									display: "flex",
									justifyContent: "center",
									color: "#90CAF9",
								}}
							>
								Entry Fee
							</Typography>
							<Typography
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								{tournament.entryFee}
							</Typography>
						</Paper>
					</Grid>
					<Grid item>
						<Paper
							elevation={10}
							sx={{
								p: 2,
							}}
						>
							<Typography
								sx={{
									display: "flex",
									justifyContent: "center",
									color: "#90CAF9",
								}}
							>
								Points to win
							</Typography>
							<Typography
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								{tournament.pointsToWin}
							</Typography>
						</Paper>
					</Grid>
					<Grid item>
						<Paper
							elevation={10}
							sx={{
								p: 2,
							}}
						>
							<Typography
								sx={{
									display: "flex",
									justifyContent: "center",
									color: "#90CAF9",
								}}
							>
								Winner Get
							</Typography>
							<Typography
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								{tournament.winnerAmount}
							</Typography>
						</Paper>
					</Grid>
					<Grid item>
						<Paper
							elevation={10}
							sx={{
								p: 2,
							}}
						>
							<Typography
								sx={{
									display: "flex",
									justifyContent: "center",
									color: "#90CAF9",
								}}
							>
								Runner Up get
							</Typography>
							<Typography
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								{tournament.runnerUpAmount}
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Paper>
		</>
	)
}

export default TournamentInfoCard
