import { TextField } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useEffect, useState } from "react"
import UserNavBar from "../components/navbar"
import UserCard from "../components/userCard"
import axios from "../axios"
import { useSelector } from "react-redux"

function FriendList() {
	const [users, setUsers] = useState([])
	const user = useSelector((state) => state.user.user)

	useEffect(() => {
		;(async () => {
			const response = await axios.get("/users/friends/" + user._id)
			setUsers(response.data)
		})()
	}, [])

	return (
		<>
			<UserNavBar />
			<Container>
				<Box
					display="flex"
					justifyContent="center"
					component="form"
					autoComplete="off"
					onChange={() => {}}
					onSubmit={() => {}}
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

				{users.map((user) => (
					<UserCard key={user._id} user={user}/>
				))}
			</Container>
		</>
	)
}

export default FriendList
