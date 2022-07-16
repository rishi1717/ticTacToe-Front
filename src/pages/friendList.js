import { Button, TextField, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useEffect, useState } from "react"
import UserNavBar from "../components/navbar"
import UserCard from "../components/userCard"
import axios from "../axios"
import { useSelector } from "react-redux"
import SearchCard from "../components/searchCard"
import FriendReqCard from "../components/friendReqCard"
// import { io } from "socket.io-client"
import dotenv from "dotenv"
dotenv.config()

function FriendList() {
	const [state, setState] = useState(true)
	// const [mathcReqState, setMatchReqState] = useState(true)
	// const socket = io(process.env.REACT_APP_SERVER)
	const [search, setSearch] = useState("")
	const [friendReq, setFriendReq] = useState([])
	const [matchRequests, setMatchRequests] = useState([])
	const [friendReqSent, setFriendReqSent] = useState([])
	const [searchResults, setSearchResults] = useState([])
	const [users, setUsers] = useState([])
	const user = useSelector((state) => state.user.user)
	const [searchValue, setSearchValue] = useState("")

	useEffect(() => {
		;(async () => {
			const response = await axios.get("/users/friends/" + user._id)
			setUsers(response.data)
			const friendReq = await axios.get("/friendreq/" + user._id)
			setFriendReq(friendReq.data)
			const friendReqSent = await axios.get("/friendreq/sent/" + user._id)
			setFriendReqSent(friendReqSent.data)
		})()
	}, [state])

	useEffect(() => {
		;(async () => {
			const matchReqRecieved = await axios.get("/match/" + user._id)
			setMatchRequests(matchReqRecieved.data)
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

	// useEffect(() => {
	// 	socket.on("onlineUpdate", () => {
	// 		setState(!state)
	// 		console.log("online update", state)
	// 	})
	// 	socket.on("matchRequest", () => {
	// 		setMatchReqState(!mathcReqState)
	// 		console.log("match request", mathcReqState)
	// 	})
	// 	return () => {
	// 		socket.off("onlineUpdate")
	// 		socket.off("matchRequest")
	// 	}
	// }, [])

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
								{searchResults.map((userSearch) => (
									<SearchCard
										key={userSearch._id}
										userSearch={userSearch}
										friends={users}
										friendReq={friendReq}
										friendReqSent={friendReqSent}
										state={state}
										setState={setState}
									/>
								))}
							</>
						)}
						<Box
							sx={{
								mt: "2rem",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Button
								onClick={() => {
									setSearchValue("")
									setSearchResults([])
								}}
							>
								{" "}
								Go Back{" "}
							</Button>
						</Box>
					</>
				) : (
					<>
						{friendReq.length > 0 && (
							<>
								<Typography
									sx={{
										fontSize: {
											xs: "1rem",
											sm: "1.2rem",
											md: "1.3rem",
										},
										mt: "2rem",
										color: "#4EADFE",
										px: "2rem",
									}}
								>
									Friend Requests
								</Typography>
								{friendReq.map((req) => (
									<FriendReqCard
										key={req._id}
										req={req}
										state={state}
										setState={setState}
									/>
								))}
							</>
						)}
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
							<UserCard
								key={user._id}
								user={user}
								state={state}
								setState={setState}
								matchRequests={matchRequests}
							/>
						))}
					</>
				)}
			</Container>
		</>
	)
}

export default FriendList
