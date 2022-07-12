import { Grid, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import UserNavBar from "../components/navbar"
import axios from "../axios"
import LevelCard from "../components/LevelCard"
import { useLocation } from "react-router-dom"

function SelectLevel() {
	const location = useLocation()
	const [levels, setLevels] = useState([])
	useEffect(() => {
		;(async () => {
			try {
				const res = await axios.get("/level")
				setLevels(res.data)
			} catch (err) {
				console.log(err.message)
			}
		})()
	}, [])
	return (
		<div>
			<UserNavBar />
			<Typography
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "2rem",
					fontSize: { xs: "1.5rem", md: "2rem" },
				}}
			>
				Choose Your Level
			</Typography>
			<Grid
				container
				spacing={0}
				alignItems="center"
				justifyContent="space-evenly"
				sx={{
					my: 3,
				}}
			>
				{levels.map((level) => (
					<LevelCard
						key={level._id}
						level={level}
						player2={location.state.user}
					/>
				))}
			</Grid>
		</div>
	)
}

export default SelectLevel
