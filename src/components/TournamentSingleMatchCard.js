import { Button, Grid, Paper, Typography } from "@mui/material"
import axios from "../axios"
import React from "react"
import { useNavigate } from "react-router-dom"
// import { io } from "socket.io-client"

function TournamentSingleMatchCard({ match, user, tournament }) {
	// const socket = io(process.env.REACT_APP_SERVER)
	const navigate = useNavigate()

	const handleTournamentMatchRequest = async () => {
		try {
			let { data } = await axios.post("/tournamentmatch", {
				player1: match.player1._id,
				player2: match.player2._id,
				pointsToWin: tournament.pointsToWin,
			})
			navigate("/tournamentmatch", { state: { match: data.match } })
		} catch (err) {
			console.log(err)
		}
	}

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
								onClick={handleTournamentMatchRequest}
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
