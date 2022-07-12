import { Button, Grid, Paper, Typography } from "@mui/material"
import React from "react"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { useSelector } from "react-redux"
import axios from "../axios"
import { useNavigate } from "react-router-dom"

function LevelCard(props) {
	const navigate = useNavigate()
	const player1 = useSelector((state) => state.user.user._id)
	const { level, player2 } = props
	const handleMatchRequest = async (level) => {
		try {
			let res = await axios.post("/match", {
				player1,
				player2,
                pointsToWin: level.pointsToWin,
				entryFee: level.entryFee,
                winningAmount: level.winningAmount,
			})
			navigate("/game", { state: { match: res.data.match } })
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<Grid
			item
			alignItems="center"
			display="flex"
			justify="center"
			sx={{
				m: 2,
			}}
		>
			<Paper
				elevation={10}
				sx={{
					padding: 3,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "200px",
				}}
			>
				<Typography
					sx={{
						fontSize: 32,
						color: "#4EADFE",
					}}
				>
					{level.name}
				</Typography>
				<Typography
					sx={{
						m: 1,
					}}
				>
					Entry Fee : {level.entryFee}
				</Typography>
				<Typography
					sx={{
						m: 1,
					}}
				>
					Winnings : {level.winningAmount}
				</Typography>
				<Typography
					sx={{
						m: 1,
					}}
				>
					Points to Win : {level.pointsToWin}
				</Typography>
				<Button
					sx={{
						mt: 2,
						py: 2,
						borderRadius: 100,
					}}
					onClick={() => {handleMatchRequest(level)}}
				>
					<ArrowForwardIosIcon />
				</Button>
			</Paper>
		</Grid>
	)
}

export default LevelCard
