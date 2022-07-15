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
	const [matchData, setMatchData] = useState({})
	const [winner, setWinner] = React.useState("")
	const [update, setUpdate] = useState(false)
	const [waitingForOpponent, setWaitingForOpponent] = useState(true)
	const [loaded, setLoaded] = useState(false)
	const socket = io(process.env.REACT_APP_SERVER)

	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get("/match/details/" + match._id)
				setMatchData(data.match)
				if (!data.match) {
					navigate("/friendlist")
				}
				if (data.match.status !== "requested") {
					setWaitingForOpponent(false)
				}
				console.log(data.match)
				if (data.match.winner) {
					setWinner(data.match.winner.userName)
				}
			} catch (err) {
				console.log(err.message)
			}
		})()
	}, [update])

	useEffect(() => {
		if (matchData.player1) {
			setLoaded(true)
		}
	}, [matchData])

	useEffect(() => {
		socket.on("acceptMatch", () => {
			console.log("accepted match")
			setUpdate(!update)
		})

		socket.on("matchUpdate", () => {
			console.log("updated match")
			setUpdate(!update)
		})
		socket.on("winnerUpdate", () => {
			console.log("winner")
			setUpdate(!update)
		})
		return () => {
			socket.off("acceptMatch")
			socket.off("matchUpdate")
			socket.off("winnerUpdate")
		}
	}, [])

	return (
		<>
			{loaded && (
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
									<Typography>
										Waiting For Opponent to Connect
									</Typography>
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
											setLoaded(false)
											setMatchData({})
											setWinner("")
											setWaitingForOpponent(true)
										}}
									>
										Leave
									</Button>
								</Paper>
							</Box>
						</>
					)}

					<>
						<GameCard match={matchData} />
						<GameBoard
							match={matchData}
							update={update}
							setUpdate={setUpdate}
							setWinner={setWinner}
						/>
					</>
				</div>
			)}
		</>
	)
}

export default GamePage
