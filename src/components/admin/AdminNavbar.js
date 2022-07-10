import { AppBar, Toolbar, Typography } from "@mui/material"
import React from "react"

function AdminNavbar() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="h6"
					sx={{
						"&:hover": {
							cursor: "pointer",
						},
					}}
				>
					TicTacToe
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default AdminNavbar
