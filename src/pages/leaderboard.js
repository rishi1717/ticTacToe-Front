import { Box, Container, Tab, Tabs } from "@mui/material"
import axios from "../axios"
import React, { useEffect, useState } from "react"
import Navbar from "../components/navbar.js"
import TabPanel, { a11yProps } from "../components/tabPanel"
import LeaderboardCard from "../components/leaderboardCard"

function Leaderboard() {
	const [mostWins, setMostWins] = useState([])
	const [winRatio, setWinRatio] = useState([])
	const [earnings, setEarnings] = useState([])
	useEffect(() => {
		;(async () => {
			const response = await axios.get("/users/leaderboard")
			console.log(response.data)
			setMostWins(response.data.mostWins)
			setWinRatio(response.data.winRatio)
			setEarnings(response.data.mostEarnings)
		})()
	}, [])
	const [value, setValue] = useState(0)
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<>
			<Navbar />
			<Container>
				<Box sx={{ width: "100%" }}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
						>
							<Tab label="Wins" {...a11yProps(0)} />
							<Tab label="Win Ratio" {...a11yProps(1)} />
							<Tab label="Earnings" {...a11yProps(2)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						{mostWins.map((user) => (
							<LeaderboardCard key={user._id} />
						))}
					</TabPanel>
					<TabPanel value={value} index={1}>
						{winRatio.map((user) => (
							<LeaderboardCard key={user._id} />
						))}
					</TabPanel>
					<TabPanel value={value} index={2}>
						{earnings.map((user) => (
							<LeaderboardCard key={user._id} />
						))}
					</TabPanel>
				</Box>
			</Container>
		</>
	)
}

export default Leaderboard
