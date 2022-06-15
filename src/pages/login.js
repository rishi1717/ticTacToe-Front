import React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import InputIcon from "@mui/icons-material/Input"
import GoogleIcon from "@mui/icons-material/Google"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		})
	}

	return (
		<>
			<Navbar />
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<InputIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Button
							fullWidth
							variant="contained"
							sx={{
								mb: 2,
								backgroundColor: "White",
								color: "#750000",
								":hover": {
									bgcolor: "#750000",
									color: "white",
								},
							}}
						>
							<GoogleIcon />
							oogle Login
						</Button>
						<Button
							fullWidth
							variant="contained"
							sx={{
								mt: 3,
								mb: 2,
								backgroundColor: "White",
								color: "#272727",
								":hover": {
									bgcolor: "#272727",
									color: "white",
								},
							}}
                            onClick={() => {
                                navigate("/signup")
                            }}
						>
							Sign Up
						</Button>
					</Box>
				</Box>
			</Container>
		</>
	)
}

export default Login
