import React, { useContext } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import image from "../assets/images/hacker.png"
import { Button } from "@mui/material"
import axios from "../axios"
import LevelContext from "../contextApi/levelContext"

export default function FriendReqCard(props) {
	const { req, state, setState } = props
    const levels = useContext(LevelContext)
	const handleAccept = async () => {
		try {
			const res = await axios.patch("friendreq/accept/"+req._id)
            setState(!state)
			console.log(res)
		} catch (err) {
			console.log(err.message)
		}
	}
	const handleReject = async () => {
		try {
			const res = await axios.patch("friendreq/reject/"+req._id)
            setState(!state)
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
					{req.from.userName}
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: "0.8rem", md: "1rem" },
					}}
				>
					{req.from.fullName}
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
				<Typography>{levels[req.from.level]}</Typography>
			</CardContent>

			<CardContent
				sx={{
					display: "flex",
					width: { xs: 200, md: 200 },
				}}
			>
				<Button
					sx={{
						fontSize: { xs: "0.5rem", md: "0.8rem" },
						backgroundColor: "#750000",
						color: "white",
						maxWidth: 150,
						mt: { xs: "0.5rem" },
						mr: { xs: "0.5rem" },
					}}
					onClick={handleReject}
				>
					Reject
				</Button>
				<Button
					sx={{
						fontSize: { xs: "0.5rem", md: "0.8rem" },
						backgroundColor: "#007500",
						color: "white",
						maxWidth: 150,
						mt: { xs: "0.5rem" },
						mr: { xs: "0.5rem" },
					}}
					onClick={handleAccept}
				>
					Accept
				</Button>
			</CardContent>
		</Card>
	)
}
