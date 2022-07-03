import React, { useContext } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import image from "../assets/images/hacker.png"
import { Button } from "@mui/material"
import LevelContext from "../contextApi/levelContext"
import axios from "../axios"
import { useSelector } from "react-redux"

export default function SearchCard(props) {
	const { userSearch, friends, friendReq } = props
	const user1 = useSelector((state) => state.user.user)
	const levels = useContext(LevelContext)
	const isFriend = friends.find((friend) => friend._id === userSearch._id)
	const handleClick = async () => {
		try {
			const res = await axios.post("friendreq", {
				from: user1._id,
				to: userSearch._id,
			})
			console.log(res)
		} catch (err) {
			console.log(err.message)
		}
	}
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
					{userSearch.userName}
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: "0.8rem", md: "1rem" },
					}}
				>
					{userSearch.fullName}
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
				<Typography>{levels[userSearch.level]}</Typography>
			</CardContent>

			<CardContent
				sx={{
					display: "flex",
					flexDirection: { xs: "column" },
					width: { xs: 200, md: 200 },
				}}
			>
				{isFriend ? (
					<>
						<Button
							sx={{
								fontSize: { xs: "0.5rem", md: "0.8rem" },
								backgroundColor: "#4EADFE",
								color: "white",
								maxWidth: 150,
							}}
						>
							Request Match
						</Button>
						<Button
							sx={{
								backgroundColor: "#4EADFE",
								color: "white",
								fontSize: { xs: "0.5rem", md: "0.8rem" },
								mt: { xs: "0.5rem" },
								maxWidth: 150,
							}}
						>
							Profile
						</Button>
					</>
				) : (
					<>
						<Button
							sx={{
								fontSize: { xs: "0.5rem", md: "0.8rem" },
								backgroundColor: "#4EADFE",
								color: "white",
								maxWidth: 150,
							}}
							onClick={handleClick}
						>
							Send Request
						</Button>
					</>
				)}
			</CardContent>
		</Card>
	)
}
