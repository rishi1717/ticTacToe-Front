import React from "react"
import { Grid, Paper } from "@mui/material"
import Navbar from "../components/navbar"

function Landing() {
	return (
		<>
			<Navbar />
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: "60vh"}}
			>
				<Grid item xs={3}>
					<Paper
						elevation={10}
						sx={{
							width: { xs: 200, sm: 350, md: 500 },
							textAlign: "center",
							py: 1,
							mb: 3,
						}}
					>
						Random Match
					</Paper>
					<Paper
						elevation={10}
						sx={{
							width: { xs: 200, sm: 350, md: 500 },
							textAlign: "center",
							py: 1,
							mb: 3,
						}}
					>
						Friends List
					</Paper>
					<Paper
						elevation={10}
						sx={{
							width: { xs: 200, sm: 350, md: 500 },
							textAlign: "center",
							py: 1,
							mb: 3,
						}}
					>
						Tournaments
					</Paper>
					<Paper
						elevation={10}
						sx={{
							width: { xs: 200, sm: 350, md: 500 },
							textAlign: "center",
							py: 1,
							mb: 3,
						}}
					>
						Leaderboard
					</Paper>
				</Grid>
			</Grid>
		</>
	)
}

export default Landing
