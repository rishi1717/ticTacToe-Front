import { Grid } from "@mui/material"
import axios from "../axios"
import React from "react"
import AddTournament from "../components/AddTournament"
import UserNavBar from "../components/navbar"
import SearchTournaments from "../components/SearchTournaments"
import TournamentList from "../components/TournamentList"
import { useEffect } from "react"

function Tournaments() {
	const [search, setSearch] = React.useState("")
	const [searchResults, setSearchResults] = React.useState([])
	const [tournaments, setTournaments] = React.useState([])

	useEffect(() => {
		;(async () => {
			try {
				const res = await axios.get("/tournament")
				setTournaments(res.data.tournaments)
			} catch (err) {
				console.log(err)
			}
		})()
	}, [])

	const handleSubmit = async (event) => {
		try {
			event.preventDefault()
			const { data } = await axios.get(`/tournament/search?search=${search}`)
			setSearchResults(data.tournaments)
		} catch (err) {
			console.log(err.message)
		}
	}

	return (
		<div>
			<UserNavBar />
			<Grid>
				<SearchTournaments
					search={search}
					setSearch={setSearch}
					handleSubmit={handleSubmit}
				/>
				<AddTournament />
				{searchResults.length > 0 ? (
					<TournamentList tournaments={searchResults} />
				) : (
					<TournamentList tournaments={tournaments} />
				)}
			</Grid>
		</div>
	)
}

export default Tournaments
