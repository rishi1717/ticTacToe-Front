import React from "react"
import { Grid, Paper } from "@mui/material"
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"

function Landing() {
	const navigate = useNavigate()
	return (
		<>
			<Navbar />
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: "60vh" }}
			>
				<Grid item xs={3}>
					<Paper
						elevation={10}
						sx={{
							width: { xs: 200, sm: 350, md: 500 },
							textAlign: "center",
							py: 1,
							mb: 3,
							cursor: "pointer",
							"&:hover": {
								backgroundColor: "#4EADFE",
								transform: "scale(1.05)",
								transition:
									"transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
							},
						}}
						onClick={() => {
							navigate("/game")
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
							cursor: "pointer",
							"&:hover": {
								backgroundColor: "#4EADFE",
								transform: "scale(1.05)",
								transition:
									"transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
							},
						}}
						onClick={() => {
							navigate("/friendList")
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
							cursor: "pointer",
							"&:hover": {
								backgroundColor: "#4EADFE",
								transform: "scale(1.05)",
								transition:
									"transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
							},
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
							cursor: "pointer",
							"&:hover": {
								backgroundColor: "#4EADFE",
								transform: "scale(1.05)",
								transition:
									"transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
							},
						}}
						onClick={() => {
							navigate("/leaderboard")
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
