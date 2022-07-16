import axios from "../axios"
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import UserNavBar from "../components/navbar"
import TournamentInfoCard from "../components/TournamentInfoCard"
import TournamentVsDetails from "../components/TournamentVsDetails"
import { useState } from "react"
import { Typography } from "@mui/material"
// import { io } from "socket.io-client"

function TournamentPage() {
	// const socket = io(process.env.REACT_APP_SERVER)
	// const [update, setUpdate] = useState(false)
	const [tournament, setTournament] = useState(useLocation().state.tournament)

	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get(`/tournament/${tournament._id}`)
				setTournament(data.tournament)
			} catch (err) {
				console.log(err.message)
			}
		})()
	}, [])

	// useEffect(() => {
	// 	socket.on("playerJoined", () => {
	// 		setUpdate(!update)
	// 		console.log("player joined")
	// 	})
	// },[])
	
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
			<TournamentInfoCard tournament={tournament} />
			<TournamentVsDetails tournament={tournament} />
		</div>
	)
}

export default TournamentPage
