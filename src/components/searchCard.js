import React, { useContext } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import image from "../assets/images/hacker.png"
import { Button } from "@mui/material"
import LevelContext from "../contextApi/levelContext"

export default function SearchCard(props) {
	const { user } = props
	const levels = useContext(LevelContext)
	return (
		<Card
			sx={{
				display: "flex",
				m: "1rem",
				flexDirection: { xs: "row", md: "row" },
				justifyContent: { xs: "center", md: "space-between" },
				alignItems: { xs: "center" },
				borderRadius: 2,
				boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
			}}
		>
			<CardMedia
				component="img"
				image={image}
				alt={"picture"}
				sx={{
					height: { xs: 60, md: 80 },
					width: { xs: 60, md: 80 },
					p: 1,
				}}
			/>

			<CardContent
				sx={{
					display: "flex",
					flexDirection: { xs: "column" },
					justifyContent: { xs: "center" },
					alignItems: { xs: "left" },
					width: { xs: 200, md: 200 },
				}}
			>
				<Typography
					sx={{
						fontSize: { xs: "1rem", md: "1.1rem" },
					}}
				>
					{user.userName}
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: "0.8rem", md: "1rem" },
					}}
				>
					{user.fullName}
				</Typography>
			</CardContent>

			<CardContent
				sx={{
					display: { xs: "none", sm: "flex" },
					flexDirection: { xs: "column" },
					justifyContent: { xs: "center" },
					alignItems: { xs: "left" },
					width: { xs: 200, md: 200 },
				}}
			>
				<Typography>{levels[user.level]}</Typography>
			</CardContent>

			<CardContent
				sx={{
					display: "flex",
					flexDirection: { xs: "column" },
					width: { xs: 200, md: 200 },
				}}
			>
				<Button
					sx={{
						fontSize: { xs: "0.5rem", md: "0.8rem" },
						backgroundColor: "#4EADFE",
						color: "white",
						maxWidth: 150,
					}}
				>
					Send Request
				</Button>
			</CardContent>
		</Card>
	)
}
