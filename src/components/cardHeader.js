import { Card, CardContent, Grid, Typography } from "@mui/material"
import React from "react"

function CardHeader() {
	return (
		<Card
			sx={{
				display: { xs: "none", sm: "flex" },
				m: "1rem",
				flexDirection: { xs: "column", md: "row" },
				backgroundColor: "#585858",
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={1}>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography
							variant="subtitle1"
							color="white"
							component="div"
							borderRight={1}
						>
							Name
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	)
}

export default CardHeader
