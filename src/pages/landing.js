import React from "react"
import UserNavBar from "../components/userNavbar"
import GuestNavBar from "../components/guestNavbar"
import { Grid, Paper } from "@mui/material"

function Landing() {
	return (
		<>
			{true ? <UserNavBar /> : <GuestNavBar />}
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: "100vh" }}
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
