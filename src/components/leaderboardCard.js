import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import React, { useContext } from "react"
import image from "../assets/images/hacker.png"
import LevelContext from "../contextApi/levelContext"

function LeaderboardCard({ user, value }) {
	const levels = useContext(LevelContext)

	const cardStyle = {
		display: { xs: "none", sm: "flex" },
		flexDirection: { xs: "column" },
		justifyContent: { xs: "center" },
		alignItems: { xs: "left" },
		width: { xs: 200, md: 200 },
	}

	const cardStyle2 = {
		display: { xs: "flex", sm: "flex" },
		flexDirection: { xs: "column" },
		justifyContent: { xs: "center" },
		alignItems: { xs: "left" },
		width: { xs: 200, md: 200 },
	}

	return (
		<>
			<Card
				sx={{
					display: "flex",
					m: { xs: "0rem", md: "1rem" },
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
						width: { xs: 400, md: 200 },
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "0.8rem", md: "1.1rem" },
						}}
					>
						{user.userName}
					</Typography>
					<Typography
						sx={{
              display: { xs: "flex", md: "none" },
							fontSize: { xs: "0.8rem", md: "1.1rem" },
						}}
					>
						{levels[user.level]}
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

				<CardContent sx={value === 0 ? cardStyle2 : cardStyle}>
					<Typography>{user.matchesWon}</Typography>
				</CardContent>

				<CardContent sx={value === 1 ? cardStyle2 : cardStyle}>
					<Typography>{user.winRatio}</Typography>
				</CardContent>

				<CardContent sx={value === 2 ? cardStyle2 : cardStyle}>
					<Typography>{user.amountWon}</Typography>
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
							fontSize: { xs: "0.4rem", md: "0.8rem" },
							backgroundColor: "#4EADFE",
							color: "white",
							maxWidth: 150,
						}}
					>
						Send Request
					</Button>
				</CardContent>
			</Card>
		</>
	)
}

export default LeaderboardCard
