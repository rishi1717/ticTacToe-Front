import { Button, Grid, Paper, Typography } from "@mui/material"
import React from "react"

function TournamentSingleMatchCard({ match, user }) {
	return (
		<>
			<Paper
				elevation={10}
				sx={{
					padding: "1rem",
					margin: "1rem",
					borderRadius: 2,
                    width: 250,
				}}
			>
				<Typography
					sx={{
						fontSize: "0.7rem",
					}}
				>
					{match.player1.fullName}
				</Typography>
				<Typography>V.S</Typography>
				<Typography
					sx={{
						fontSize: "0.7rem",
					}}
				>
					{match.player2.fullName}
				</Typography>
				<Grid
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Typography
						sx={{
							fontSize: "0.6rem",
							color: "orange",
						}}
					>
						{match.status === "pending" && "Pending"}
					</Typography>
					{(user._id === match.player1._id ||
						user._id === match.player2._id) &&
						match.status === "pending" && (
							<Button
								size="small"
								variant="contained"
								sx={{
									fontSize: "0.6rem",
									color: "white",
								}}
							>
								Play
							</Button>
						)}
				</Grid>
			</Paper>
		</>
	)
}

export default TournamentSingleMatchCard
