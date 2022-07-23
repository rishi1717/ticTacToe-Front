import axios from "../axios"
import React, { useEffect, useState } from "react"
import GameBoard from "../components/GameBoard"
import GameCard from "../components/GameCard"
import UserNavBar from "../components/navbar"
import { useLocation, useNavigate } from "react-router-dom"
import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import ChatBox from "../components/ChatBox"
import { io } from "socket.io-client"
import { useSelector } from "react-redux"
import Swal from "sweetalert2"

const array = new Array(9).fill(null)

function TournamentGame(props) {
	const user = useSelector((state) => state.user.user)
	const navigate = useNavigate()
	const match = useLocation().state.match
	const [matchData, setMatchData] = useState({})
	const [messages, setMessages] = useState(matchData.messages)
	const [winner, setWinner] = React.useState("")
	const [update, setUpdate] = useState(false)
	const [loaded, setLoaded] = useState(false)
	const [gameArr, setGameArr] = useState(array)
	const socket = io(process.env.REACT_APP_SERVER)

	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get("/tournamentmatch/" + match._id)
				if (!data.match) {
					navigate("/tournament")
				}
				setMatchData(data.match)
				setMessages(data.match.messages)
				if (data.match.winner) {
					setWinner(data.match.winner.userName)
				}
				setLoaded(true)
			} catch (err) {
				console.log(err.message)
			}
		})()
	}, [update])

	useEffect(() => {
		socket.on("pointUpdate", () => {
			console.log("point match")
			setGameArr([])
			setUpdate(!update)
			Swal.fire({
				title: "Game set",
				color: "success",
				timer: 2000,
			})
		})
		return () => {
			socket.off("pointUpdate")
		}
	}, [])

	useEffect(() => {
		if (matchData.player1) {
			socket.emit("setup", user)

			socket.emit("joinMatch", matchData._id)

			socket.on("messageRecieved", (message) => {
				setMessages(message.messages)
			})

			socket.on("moveMade", (data) => {
				setUpdate(!update)
				console.log(data)
			})
		}
		return () => {
			socket.off("messageRecieved")
			socket.off("moveMade")
		}
	})

	return (
		<>
			{loaded && (
				<div>
					<UserNavBar />
					{/* {waitingForOpponent && (
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
					)} */}
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
											navigate("/tournament")
											setLoaded(false)
											setMatchData({})
											setWinner("")
										}}
									>
										Leave
									</Button>
								</Paper>
							</Box>
						</>
					)}

					<>
						<Grid
							container
							spacing={0}
							sx={{
								display: "flex",
							}}
						>
							<Grid
								sx={{
									width: { xs: "100%", md: "70%" },
								}}
							>
								<GameCard match={matchData} />
								<GameBoard
									match={matchData}
									update={update}
									setUpdate={setUpdate}
									setWinner={setWinner}
									gameArr={gameArr}
									setGameArr={setGameArr}
								/>
							</Grid>
							<Grid
								sx={{
									width: { xs: "100%", md: "29%" },
								}}
							>
								<ChatBox
									user={user}
									messages={messages}
									matchData={matchData}
									setMessages={setMessages}
								/>
							</Grid>
						</Grid>
					</>
				</div>
			)}
		</>
	)
}

export default TournamentGame
