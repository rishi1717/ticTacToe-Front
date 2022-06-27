import { TextField } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import UserNavBar from '../components/navbar'
import UserCard from '../components/userCard'

function FriendList() {
  return (
		<>
        <UserNavBar/>
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

                {[1,2,3,4,5,6,7,8,9,10].map((i) => <UserCard key={i}/>)}
			</Container>
		</>
  )
}

export default FriendList