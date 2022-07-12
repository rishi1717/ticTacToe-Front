import axios from "../axios"
import React, { useEffect, useState } from "react"
import GameBoard from "../components/GameBoard"
import GameCard from "../components/GameCard"
import UserNavBar from "../components/navbar"
import { useLocation, useNavigate } from "react-router-dom"
import { Box, Paper, Typography } from "@mui/material"
import { io } from "socket.io-client"

function GamePage(props) {
	const navigate = useNavigate()
	const match = useLocation().state.match
	const [update, setUpdate] = useState(false)
	const [waitingForOpponent, setWaitingForOpponent] = useState(true)
	const socket = io(process.env.REACT_APP_SERVER)

	useEffect(() => {
		;(async () => {
			try {
				const response = await axios.get("/match/details/" + match._id)
				if (!response.data) {
					navigate("/friendlist")
				}
				if (response.data.status !== "requested") {
					setWaitingForOpponent(false)
				}
			} catch (err) {
				console.log(err.message)
			}
		})()
	}, [update])

	socket.on("acceptMatch", ({ from }) => {
		console.log(from, "accepted")
	})

	return (
		<div>
			<UserNavBar />
			{waitingForOpponent && (
				<>
					<Box
						sx={{
							position: "fixed",
							height: "89vh",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "rgba(0,0,0,.75)",
						}}
					>
						<Paper
							sx={{
								padding: "5rem",
							}}
						>
							<Typography>Waiting For Opponent to Connect</Typography>
						</Paper>
					</Box>
				</>
			)}
			<GameCard />
			<GameBoard />
		</div>
	)
}

export default GamePage
