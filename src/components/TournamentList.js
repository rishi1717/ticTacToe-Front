import { Grid, Paper, Typography } from "@mui/material"
import React from "react"
import TournamentCard from "./TournamentCard"

function TournamentList({ tournaments }) {
	return (
		<>
			<Typography
				sx={{
					fontSize: "1.3rem",
					mt: 3,
					mx: 6,
					color: "#90CAF9",
				}}
			>
				Join a Tournament
			</Typography>
			<Paper
				sx={{
					padding: "1rem",
					mt: 3,
					mx: 6,
					borderRadius: "1rem",
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<Grid
					sx={{
						width: 100,
					}}
				>
					<Typography>Name</Typography>
				</Grid>
				<Grid
					sx={{
						width: 100,
					}}
				>
					<Typography>Players</Typography>
				</Grid>
				<Grid
					sx={{
						width: 100,
					}}
				>
					<Typography>Entry Fee</Typography>
				</Grid>
				<Grid
					sx={{
						width: 100,
					}}
				>
					<Typography>Points to Win</Typography>
				</Grid>
				<Grid
					sx={{
						width: 100,
					}}
				>
					<Typography>Status</Typography>
				</Grid>
				<Grid
					sx={{
						width: 100,
					}}
				>
					<Typography>Join</Typography>
				</Grid>
			</Paper>
			{tournaments.map((tournament) => (
				<TournamentCard key={tournament._id} tournament={tournament} />
			))}
		</>
	)
}

export default TournamentList
