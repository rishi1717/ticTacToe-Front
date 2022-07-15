import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "../axios"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { io } from "socket.io-client"
import Swal from "sweetalert2"

const array = new Array(9).fill(null)

function GameBoard({ match, update, setUpdate, setWinner }) {
	const user = useSelector((state) => state.user.user)
	let matchId = match._id
	let player = match.player1._id === user._id ? "player1" : "player2"
	const [gameArr, setGameArr] = React.useState(array)
	const [turn, setTurn] = React.useState(player === match.turn)
	const socket = io(process.env.REACT_APP_SERVER)

	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get(`/match/details/${matchId}`)
				let player1Moves = data.match.player1Moves
				let player2Moves = data.match.player2Moves
				if (data.match.winner) {
					setWinner(data.match.winner.userName)
				}
				setGameArr((gameArr) => {
					const newGameArr = [...gameArr]
					player1Moves.forEach((move) => {
						newGameArr[move] = "X"
					})
					player2Moves.forEach((move) => {
						newGameArr[move] = "O"
					})
					return newGameArr
				})
				setTurn(data.match.turn === player)
			} catch (err) {
				console.log(err)
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

	const handleBoxClick = async (i) => {
		if (!turn) {
			Swal.fire({
				title: "It's not your turn",
				timer: 1000,
			})
			return
		}
		const { data } = await axios.patch("/match/move/" + matchId, {
			player: player,
			move: i,
		})
		if (data.match.winner) {
			setWinner(data.match.winner.userName)
		}
		let player1Moves = data.match.player1Moves
		let player2Moves = data.match.player2Moves
		setGameArr((gameArr) => {
			const newGameArr = [...gameArr]
			player1Moves.forEach((move) => {
				newGameArr[move] = "X"
			})
			player2Moves.forEach((move) => {
				newGameArr[move] = "O"
			})
			return newGameArr
		})
		setUpdate(!update)
	}

	return (
		<Box
			sx={{
				width: { xs: "100", md: "70%" },
				backgroundColor: "#272727",
				margin: "1rem",
				px: { xs: "5%", sm: "25%", md: "15%", lg: "19%" },
				py: "1rem",
			}}
		>
			<Grid
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
				}}
			>
				<Grid
					sx={{
						height: { xs: "7rem", sm: "8rem", md: "9rem" },
						border: "1px solid white",
						borderRadius: "1rem 0 0 0",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					onClick={() => {
						handleBoxClick(0)
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
						}}
					>
						{gameArr[0]}
					</Typography>
				</Grid>
				<Grid
					sx={{
						height: { xs: "7rem", sm: "8rem", md: "9rem" },
						border: "1px solid white",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					onClick={() => {
						handleBoxClick(1)
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
						}}
					>
						{gameArr[1]}
					</Typography>
				</Grid>
				<Grid
					sx={{
						height: { xs: "7rem", sm: "8rem", md: "9rem" },
						border: "1px solid white",
						borderRadius: "0 1rem 0 0  ",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					onClick={() => {
						handleBoxClick(2)
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
						}}
					>
						{gameArr[2]}
					</Typography>
				</Grid>
			</Grid>

			<Grid
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat( 3, 1fr)",
				}}
			>
				<Grid
					sx={{
						height: { xs: "7rem", sm: "8rem", md: "9rem" },
						border: "1px solid white",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					onClick={() => {
						handleBoxClick(3)
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
						}}
					>
						{gameArr[3]}
					</Typography>
				</Grid>
				<Grid
					sx={{
						height: { xs: "7rem", sm: "8rem", md: "9rem" },
						border: "1px solid white",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					onClick={() => {
						handleBoxClick(4)
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
						}}
					>
						{gameArr[4]}
					</Typography>
				</Grid>
				<Grid
					sx={{
						height: { xs: "7rem", sm: "8rem", md: "9rem" },
						border: "1px solid white",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					onClick={() => {
						handleBoxClick(5)
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
						}}
					>
						{gameArr[5]}
					</Typography>
				</Grid>
			</Grid>

			<Grid
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
				}}
			>
				<Grid
					sx={{
						height: { xs: "7rem", sm: "8rem", md: "9rem" },
						border: "1px solid white",
						borderRadius: "0 0 0 1rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					onClick={() => {
						handleBoxClick(6)
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
						}}
					>
						{gameArr[6]}
					</Typography>
				</Grid>
				<Grid
					sx={{
						height: { xs: "7rem", sm: "8rem", md: "9rem" },
						border: "1px solid white",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					onClick={() => {
						handleBoxClick(7)
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
						}}
					>
						{gameArr[7]}
					</Typography>
				</Grid>
				<Grid
					sx={{
						height: { xs: "7rem", sm: "8rem", md: "9rem" },
						border: "1px solid white",
						borderRadius: "0 0 1rem 0  ",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					onClick={() => {
						handleBoxClick(8)
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
						}}
					>
						{gameArr[8]}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default GameBoard
