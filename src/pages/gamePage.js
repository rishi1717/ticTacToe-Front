import axios from "../axios"
import React, { useEffect, useState } from "react"
import GameBoard from "../components/GameBoard"
import GameCard from "../components/GameCard"
import UserNavBar from "../components/navbar"
import { useLocation, useNavigate } from "react-router-dom"
import { Box, Button, Paper, Typography } from "@mui/material"
import { io } from "socket.io-client"

function GamePage(props) {
	const navigate = useNavigate()
	const match = useLocation().state.match
	const [winner, setWinner] = React.useState("")
	const [update, setUpdate] = useState(false)
	const [waitingForOpponent, setWaitingForOpponent] = useState(true)
	const socket = io(process.env.REACT_APP_SERVER)

	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get("/match/details/" + match._id)
				if (!data.match) {
					navigate("/friendlist")
				}
				if (data.match.status !== "requested") {
					setWaitingForOpponent(false)
				}
				if (data.match.winner) {
					setWinner(data.match.winner.userName)
				}
			} catch (err) {
				console.log(err.message)
			}
		})()
	}, [update])

	socket.on("acceptMatch", ({ from }) => {
		setUpdate(!update)
	})

	socket.on("matchUpdate", () => {
		console.log("match update")
		setUpdate(!update)
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
			{winner && (
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
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Typography>{winner} Won</Typography>
							<Button
								sx={{
									marginTop: "1rem",
								}}
								onClick={() => {
									navigate("/friendlist")
								}}
							>
								Leave
							</Button>
						</Paper>
					</Box>
				</>
			)}
			<GameCard match={match} />
			<GameBoard match={match} winner={winner} setWinner={setWinner} />
		</div>
	)
}

export default GamePage
