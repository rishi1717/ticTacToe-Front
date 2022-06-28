import { Button, TextField, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useEffect, useState } from "react"
import UserNavBar from "../components/navbar"
import UserCard from "../components/userCard"
import axios from "../axios"
import { useSelector } from "react-redux"
import SearchCard from "../components/searchCard"

function FriendList() {
	const [search, setSearch] = useState("")
	const [searchResults, setSearchResults] = useState([])
	const [users, setUsers] = useState([])
	const user = useSelector((state) => state.user.user)
	const [searchValue, setSearchValue] = useState("")

	useEffect(() => {
		;(async () => {
			const response = await axios.get("/users/friends/" + user._id)
			setUsers(response.data)
		})()
	}, [])

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	const handleSubmit = async (e) => {
		try {
			e.preventDefault()
			const response = await axios.get("/users?search=" + search)
			setSearchResults(response.data)
			setSearchValue(search)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
			<UserNavBar />
			<Container>
				<Box
					display="flex"
					justifyContent="center"
					component="form"
					autoComplete="off"
					value={search}
					onChange={handleChange}
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1, mb: 2 }}
				>
					<TextField
						margin="normal"
						fullWidth
						id="search"
						label="Search users"
						name="search"
						autoFocus
						variant="standard"
						sx={{ width: "90%" }}
					/>
				</Box>

				{searchValue.length > 0 ? (
					<>
						<Typography
							sx={{
								mt: "2rem",
								px: "2rem",
								color: "text.secondary",
							}}
						>
							Search result for "{searchValue}"
						</Typography>
						{searchResults.length < 1 ? (
							<Typography
								sx={{
									mt: "2rem",
									px: "2rem",
									color: "text",
									textAlign: "center",
								}}
							>
								No users found!
							</Typography>
						) : (
							<>
								{searchResults.map((user) => (
									<SearchCard key={user._id} user={user} />
								))}
							</>
						)}
						<Box sx={{
							mt: "2rem",
							display: "flex",
							justifyContent: "center",
							
						}}>
							<Button onClick={()=>{
								setSearchValue("")
								setSearchResults([])
							}}> Go Back </Button>
						</Box>
					</>
				) : (
					<>
						<Typography
							sx={{
								fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
								mt: "2rem",
								color: "#4EADFE",
								px: "2rem",
							}}
						>
							Your Friends
						</Typography>
						{users.map((user) => (
							<UserCard key={user._id} user={user} />
						))}
					</>
				)}
			</Container>
		</>
	)
}

export default FriendList
