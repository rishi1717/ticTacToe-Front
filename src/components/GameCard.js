import { Box, Grid } from '@mui/material'
import React from 'react'

function GameCard() {
  return (
		<Box
			sx={{
				width: { xs: "100", md: "70%" },
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
				<Grid item xs={12}>
					Player 1
				</Grid>
				<Grid item xs={12}>
					Player 2
				</Grid>
			</Grid>
		</Box>
  ) 
}

export default GameCard