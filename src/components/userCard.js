import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

export default function UserCard(props) {
	return (
		<Card
			sx={{
				display: "flex",
				m: "1rem",
				flexDirection: { xs: "column", md: "row" },
				borderRadius: 2,
			}}
		>
			<CardMedia
				component="img"
				image={null}
				alt={"picture"}
			/>
			
			<CardContent
				sx={{
					display: "flex",
					flexDirection: { xs: "row", sm: "row", md: "column" },
				}}
			>
				<Typography>SSS</Typography>
			</CardContent>
		</Card>
	)
}
