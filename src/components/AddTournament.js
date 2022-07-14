import {
	Button,
	FormControlLabel,
	FormLabel,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Radio,
	RadioGroup,
	Select,
	Switch,
	TextField,
	Typography,
} from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "../axios"

function AddTournament() {
	const navigate = useNavigate()
	const user = useSelector((state) => state.user.user)
	const [name, setName] = React.useState("")
	const [players, setPlayers] = React.useState(4)
	const [entryFee, setEntryFee] = React.useState(10)
	const [pointsToWin, setPointsToWin] = React.useState(1)
	const [closed, setClosed] = React.useState(false)
	const [error, setError] = React.useState("")

	const handleNameChange = (event) => {
		setName(event.target.value)
	}

	const handlePlayerChange = (event) => {
		setPlayers(event.target.value)
	}

	const handleEntryFeeChange = (event) => {
		setEntryFee(event.target.value)
	}

	const handlePointsToWinChange = (event) => {
		setPointsToWin(event.target.value)
	}

	const handleClosedChange = (event) => {
		setClosed(event.target.checked)
	}

	const handleSubmit = async (event) => {
		try {
			if (
				name === "" ||
				players === "" ||
				entryFee === "" ||
				pointsToWin === ""
			) {
				setError("Please fill out all fields")
				return
			}

			const data = {
				name,
				noOfPlayers: players,
				entryFee,
				pointsToWin,
				closed,
				host: user._id,
			}
			console.log(data)
			const res = await axios.post("/tournament", data)
			navigate("/tournament", { state: { tournament: res.data.tournament } })
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
			<Paper
				sx={{
					mx: 6,
					boxShadow: "0.2px 1px 5px #888888",
				}}
			>
				<Typography
					sx={{
						display: "flex",
						pt: "1rem",
						pl: "2rem",
					}}
				>
					Create a Tournament
				</Typography>
				<Paper
					elevation={1}
					sx={{
						p: 3,
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-evenly",
					}}
				>
					<Grid
						sx={{
							display: "flex",
							flexDirection: "column",
							pt: { xs: 3, md: 0 },
						}}
					>
						<FormLabel>Enter Name</FormLabel>
						<TextField
							value={name}
							onChange={handleNameChange}
							id="outlined-basic"
							variant="outlined"
						/>
					</Grid>

					<Grid sx={{ pt: { xs: 3, md: 0 } }}>
						<FormLabel id="demo-controlled-radio-buttons-group">
							Number of players
						</FormLabel>
						<RadioGroup
							aria-labelledby="demo-controlled-radio-buttons-group"
							name="controlled-radio-buttons-group"
							value={players}
							onChange={handlePlayerChange}
							row
						>
							<FormControlLabel
								value={4}
								control={<Radio />}
								label="4"
							/>
							<FormControlLabel
								value={8}
								control={<Radio />}
								label="8"
							/>
							<FormControlLabel
								value={16}
								control={<Radio />}
								label="16"
							/>
						</RadioGroup>
					</Grid>

					<Grid sx={{ pt: { xs: 3, md: 0 } }}>
						<InputLabel id="demo-simple-select-label">
							Entry Fee
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={entryFee}
							label="Entry Fee"
							onChange={handleEntryFeeChange}
						>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={20}>20</MenuItem>
							<MenuItem value={50}>50</MenuItem>
							<MenuItem value={100}>100</MenuItem>
						</Select>
					</Grid>

					<Grid sx={{ pt: { xs: 3, md: 0 } }}>
						<InputLabel id="demo-simple-select-label">
							Points to win
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={pointsToWin}
							label="Entry Fee"
							onChange={handlePointsToWinChange}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={3}>3</MenuItem>
							<MenuItem value={5}>5</MenuItem>
						</Select>
					</Grid>

					<Grid
						sx={{
							pt: { xs: 3, md: 0 },
							display: "flex",
							flexDirection: "column",
						}}
					>
						<FormLabel>Private</FormLabel>
						<Switch
							checked={closed}
							onChange={handleClosedChange}
							color="primary"
						/>
					</Grid>

					<Grid
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							pt: { xs: 3, md: 0 },
						}}
					>
						<Button variant="contained" onClick={handleSubmit}>
							Create
						</Button>
						{error && (
							<Typography
								sx={{
									color: "red",
								}}
							>
								{error}
							</Typography>
						)}
					</Grid>
				</Paper>
			</Paper>
		</div>
	)
}

export default AddTournament
