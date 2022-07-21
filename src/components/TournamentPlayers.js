import { Box, Grid, Paper, Typography } from "@mui/material"
import React from "react"
import EmptyPlayerCard from "./EmptyPlayerCard"
import TournamentPlayerCard from "./TournamentPlayerCard"

function TournamentPlayers({ tournament }) {
	const empty = tournament.noOfPlayers - tournament.playersJoined
	const emptyArray = Array.from({ length: empty }, (x, index) => (
		<Grid item xs={3} key={index} sx={{
			mr: "0.5rem",
		}}>
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
				<Box
					spacing={2}
					pr={3}
					sx={{
						overflowX: "scroll",
						display: "flex",
						"&::-webkit-scrollbar": {
							height: 8,
						},
						"&::-webkit-scrollbar-track": {
							background: "#f1f1f1",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "#888888",
							borderRadius: 2,
						},
					}}
				>
					{tournament.players.map((player) => (
						<TournamentPlayerCard key={player} player={player} />
					))}
					{emptyArray}
				</Box>
			</Paper>
		</>
	)
}

export default TournamentPlayers
