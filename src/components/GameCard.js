import { Box, Grid, Paper, Typography } from "@mui/material"
import React from "react"

function GameCard({ match }) {
	return (
		<Box
			sx={{
				backgroundColor: "#272727",
				margin: "1rem",
				padding: "2rem",
			}}
		>
			<Grid
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography>{match.player1.userName}</Typography>
					<Paper
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							px: "1rem",
							mx: "1rem",
						}}
					>
						{match.player1Points}
					</Paper>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Paper
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							px: "1rem",
							mx: "1rem",
						}}
					>
						<Typography>To win</Typography>
						<Typography>{match.pointsToWin}</Typography>
					</Paper>
				</Grid>

				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Grid item order={{ xs: 2, sm: 1 }}></Grid>
					<Grid item order={{ xs: 1, sm: 1 }}></Grid>
					<Paper
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							px: "1rem",
							mx: "1rem",
						}}
					>
						{match.player2Points}
					</Paper>
					<Typography>{match.player2.userName}</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default GameCard
