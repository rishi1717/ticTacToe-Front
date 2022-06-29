import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import Navbar from '../components/navbar.js'

function Leaderboard() {
  return (
		<>
			<Navbar />
			<Container>
				<Grid
					Container
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Grid Item xs={12}>
						<Button
							sx={{
								mt: 3,
								color: "white",
								backgroundColor: "#4EADFE",
							}}
						>
							Most wins
						</Button>
					</Grid>
					<Grid Item xs={12}>
						<Button
							sx={{ mt: 3, color: "white", backgroundColor: "#4EADFE" }}
						>
							Win ratio
						</Button>
					</Grid>
					<Grid Item xs={12}>
						<Button
							sx={{ mt: 3, color: "white", backgroundColor: "#4EADFE" }}
						>
							Earnings
						</Button>
					</Grid>
				</Grid>
			</Container>
		</>
  )
}

export default Leaderboard