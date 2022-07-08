import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

const array = new Array(9).fill(null)

function GameBoard() {
	const handleBoxClick = (i) => {
		setGameArr((gameArr) => {
			const newGameArr = [...gameArr]
			newGameArr[i] = turn ? "X" : "O"
			setTurn(!turn)
			return newGameArr
		})
		console.log(gameArr)
	}
	const [gameArr, setGameArr] = React.useState(array)
	const [turn, setTurn] = React.useState(true)
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
