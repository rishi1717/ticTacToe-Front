import { Box, Grid, Paper, Typography } from "@mui/material"
import React from "react"
import TournamentSingleMatchCard from "./TournamentSingleMatchCard"

function TournamentMatchCard({ nextMatches, user }) {
	return (
		<div>
			<Paper
				sx={{
					padding: "1rem",
					margin: "1rem",
					borderRadius: 2,
				}}
			>
				<Typography>Matches</Typography>
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
					{nextMatches.length > 0 &&
						nextMatches.map((match) => (
							<TournamentSingleMatchCard
								key={match.player1._id}
								match={match}
								user={user}
							/>
						))}
				</Box>
			</Paper>
		</div>
	)
}

export default TournamentMatchCard
