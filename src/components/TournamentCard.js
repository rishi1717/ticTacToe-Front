import { Button, Grid, Paper, Typography } from "@mui/material"
import axios from "../axios"
import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function TournamentCard({ tournament }) {
	const navigate = useNavigate()
	const user = useSelector((state) => state.user.user)

	const handleJoin = async (id) => {
		try {
			const { data } = await axios.patch(`/tournament/join/${id}`, {
				user: user._id,
			})
			navigate(`/tournament`, { state: { tournament: data.tournament } })
		} catch (err) {
			console.log(err.message)
		}
	}
	
	return (
		<Paper
			sx={{
				padding: 1,
				mt: 3,
				mx: 6,
				borderRadius: "1rem",
				display: "flex",
				justifyContent: "space-evenly",
				boxShadow: "0.2px 0.2px 5px #555555",
			}}
		>
			<Grid
				sx={{
					width: 100,
				}}
			>
				<Typography variant="body1">{tournament.name}</Typography>
			</Grid>
			<Grid
				sx={{
					width: 100,
				}}
			>
				<Typography variant="body1">
					{tournament.playersJoined}/{tournament.noOfPlayers}
				</Typography>
			</Grid>
			<Grid
				sx={{
					width: 100,
				}}
			>
				<Typography variant="body1">{tournament.entryFee}</Typography>
			</Grid>
			<Grid
				sx={{
					width: 100,
				}}
			>
				<Typography variant="body1">{tournament.pointsToWin}</Typography>
			</Grid>
			<Grid
				sx={{
					width: 100,
				}}
			>
				<Typography variant="body1">
					{tournament.closed ? "Closed" : "Open"}
				</Typography>
			</Grid>
			<Grid
				sx={{
					width: 100,
				}}
			>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						handleJoin(tournament._id)
					}}
				>
					Join
				</Button>
			</Grid>
		</Paper>
	)
}

export default TournamentCard
