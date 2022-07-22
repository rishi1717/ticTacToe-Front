import axios from "../axios"
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import UserNavBar from "../components/navbar"
import TournamentInfoCard from "../components/TournamentInfoCard"
import { useState } from "react"
import { Grid, Typography } from "@mui/material"
import TournamentPlayers from "../components/TournamentPlayers"
import TournamentChatBox from "../components/TournamentChatBox"
import { useSelector } from "react-redux"
import { io } from "socket.io-client"
import TournamentFooter from "../components/TournamentFooter"
import TournamentMatchCard from "../components/TournamentMatchCard"

function TournamentPage() {
	const user = useSelector((state) => state.user.user)
	const socket = io(process.env.REACT_APP_SERVER)
	const [tournament, setTournament] = useState(useLocation().state.tournament)
	const [messages, setMessages] = useState([])
	const [nextMatches, setNextMatches] = useState({})

	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get(`/tournament/${tournament._id}`)
				setTournament(data.tournament)
				setMessages(data.tournament.messages)
				setNextMatches(data.tournament.nextMatches)
				if (data.tournament.playersJoined === data.tournament.noOfPlayers) {
					socket.emit("startTournament", data.tournament._id)
				}
			} catch (err) {
				console.log(err.message)
			}
		})()
	}, [])

	useEffect(() => {
		socket.emit("setupTournament", user)

		socket.on("connect", () => {
			console.log("connected in tournament")
		})

		socket.emit("joinTournament", tournament._id)

		socket.on("tournamentMessageRecieved", (tournament) => {
			console.log("message recieved in tournament")
			setMessages(tournament.messages)
		})

		socket.on("tournamentStarted", (tournament) => {
			setNextMatches(tournament.nextMatches)
			console.log(tournament)	
		})

		return () => {
			socket.off("tournamentMessageRecieved")
			socket.off("connect")
		}
	}, [])

	return (
		<div>
			<UserNavBar />
			<Typography
				sx={{
					color: "#90CAF9",
					fontSize: "1.4rem",
					mx: "1rem",
					mt: "1rem",
					px: "1rem",
				}}
			>
				{tournament.name}
			</Typography>
			<Grid container>
				<Grid item xs={12} md={8}>
					<TournamentInfoCard tournament={tournament} />
					<TournamentPlayers tournament={tournament} />
					<TournamentMatchCard
						tournament={tournament}
						user={user}
						nextMatches={nextMatches}
					/>
					<TournamentFooter tournament={tournament} />
				</Grid>
				<Grid item xs={12} md={4}>
					<TournamentChatBox
						user={user}
						tournamentData={tournament}
						messages={messages}
						setMessages={setMessages}
					/>
				</Grid>
			</Grid>
		</div>
	)
}

export default TournamentPage
