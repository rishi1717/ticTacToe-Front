import { Paper, Typography } from "@mui/material"
import React from "react"

function EmptyPlayerCard() {
	return (
		<div>
			<Paper
				elevation={10}
				sx={{
					padding: "1rem",
					margin: "1rem",
					borderRadius: 2,
					width: '100%',
                    height: { xs: 100, sm: 100 },
				}}
			>
				<Typography sx={{
                    color: "gray",
                }}>Waiting for player</Typography>
			</Paper>
		</div>
	)
}

export default EmptyPlayerCard
