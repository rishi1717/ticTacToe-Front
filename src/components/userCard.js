import React, { useContext } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import image from "../assets/images/hacker.png"
import { Button } from "@mui/material"
import LevelContext from "../contextApi/levelContext"
import { useNavigate } from "react-router-dom"
import { io } from "socket.io-client"
import axios from "../axios"

export default function UserCard(props) {
	const navigate = useNavigate()
	const { user, matchRequests } = props
	const levels = useContext(LevelContext)
	let friendReqId = ""
	const socket = io(process.env.REACT_APP_SERVER)

	const handleAcceptMatch = async (id) => {
		try {
			let { data } = await axios.patch(`/match/${id}`, {})
			socket.emit("acceptMatch", {
				to: data.match.player1.socketId,
			})
			navigate("/game", { state: { match: data.match } })
		} catch (err) {
			console.log(err)
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
				{user.active ? (
					<Typography
						sx={{
							color: "green",
						}}
					>
						online
					</Typography>
				) : (
					<Typography
						sx={{
							color: "red",
						}}
					>
						offline
					</Typography>
				)}
			</CardContent>

			<CardContent
				sx={{
					display: "flex",
					flexDirection: { xs: "column" },
					width: { xs: 200, md: 200 },
				}}
			>
				{matchRequests.some((match) => {
					if (match.player1 === user._id) {
						friendReqId = match._id
						return true
					}
					return false
				}) ? (
					<>
						<Button
							sx={{
								fontSize: { xs: "0.5rem", md: "0.8rem" },
								backgroundColor: "#137400",
								color: "white",
								maxWidth: 150,
							}}
							onClick={() => {
								handleAcceptMatch(friendReqId)
							}}
						>
							Match Now
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
							onClick={() => {
								navigate("/selectlevel", { state: { user: user._id } })
							}}
						>
							Request Match
						</Button>
					</>
				)}

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
			</CardContent>
		</Card>
	)
}
