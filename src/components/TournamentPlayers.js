import { Grid, Paper, Typography } from "@mui/material"
import React from "react"
import EmptyPlayerCard from "./EmptyPlayerCard"
import TournamentPlayerCard from "./TournamentPlayerCard"

function TournamentPlayers({ tournament }) {
	const empty = tournament.noOfPlayers - tournament.playersJoined
	const emptyArray = Array.from({ length: empty }, (x, index) => (
		<Grid item xs={3} key={index}>
			<EmptyPlayerCard />
		</Grid>
	))
	return (
		<>
			<Paper
				sx={{
					padding: "1rem",
					margin: "1rem",
					borderRadius: 2,
				}}
			>
				<Typography>Players</Typography>
				<Grid container spacing={2} pr={3} >
					{tournament.players.map((player) => (
						<Grid item xs={3} key={player}>
							<TournamentPlayerCard player={player} />
						</Grid>
					))}
					{emptyArray}
				</Grid>
			</Paper>
		</>
	)
}

export default TournamentPlayers
