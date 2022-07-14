import { Box, TextField } from "@mui/material"
import React from "react"

function SearchTournaments({ search, setSearch, handleSubmit }) {
	const handleChange = (event) => {
		setSearch(event.target.value)
	}
	return (
		<div>
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
					label="Search for Tournaments"
					name="search"
					autoFocus
					variant="standard"
					sx={{ width: "90%" }}
				/>
			</Box>
		</div>
	)
}

export default SearchTournaments
