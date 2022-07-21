import { Paper, Typography } from "@mui/material"
import axios from "../axios"
import React, { useContext, useState } from "react"
import { useEffect } from "react"
import LevelContext from "../contextApi/levelContext"

function TournamentPlayerCard({ player }) {
	const levels = useContext(LevelContext)
	const [playerDet, setPlayerDet] = useState(null)
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get(`/users/${player}`)
				setPlayerDet(data.user)
				setLoaded(true)
			} catch (err) {
				console.log(err.message)
			}
		})()
	}, [])
	return (
		loaded && (
			<Paper
				elevation={10}
				sx={{
					padding: "1rem",
					margin: "1rem",
					borderRadius: 2,
					width: "100%",
					height: { xs: 100, sm: 100 },
				}}
			>
				<Typography sx={{ fontSize: "0.9rem" }}>
					{playerDet.fullName}
				</Typography>
				<Typography sx={{ color: "gray", fontSize: "0.9rem" }}>
					{playerDet.userName}
				</Typography>
				<Typography sx={{ color: "gray", fontSize: "0.9rem" }}>
					{levels[playerDet.level]}
				</Typography>
			</Paper>
		)
	)
}

export default TournamentPlayerCard
