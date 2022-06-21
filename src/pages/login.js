import React, { useEffect, useState } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import InputIcon from "@mui/icons-material/Input"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "../axios"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../redux/userSlice"
import GoogleLogin from "react-google-login"
import { gapi } from "gapi-script"
import dotenv from "dotenv"
dotenv.config()

function Login() {
	useEffect(() => {
		function start() {
			gapi.client.init({
				clientId: process.env.REACT_APP_CLIENT_ID,
				scope: "email",
			})
		}

		gapi.load("client:auth2", start)
	}, [])
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user.user)
	useEffect(() => {
		if (user.token) {
			navigate("/")
		}
	}, [])
	const [data, setData] = useState({
		userName: "",
		password: "",
	})
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value })
		reset(data)
	}
	const onSubmit = async () => {
		try {
			const res = await axios.post("users/login", data)
			dispatch(setUser(res.data.user))
			navigate("/")
		} catch (err) {
			console.log(err.message)
		}
	}

	const onFailure = (err) => {
		console.log(err)
	}
	const onSuccess = async (response) => {
		try {
			const result = await axios.post("googleAuth", {
				token: response.tokenId,
			})
			dispatch(setUser(result.data.user))
			navigate("/")
		} catch (err) {
			console.log(err.message)
		}
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
						onSubmit={handleSubmit(onSubmit)}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							{...register("userName", {
								required: "Provide userName!",
								minLength: {
									value: 6,
									message: "Atleast 6 characters required",
								},
							})}
							margin="normal"
							required
							fullWidth
							id="userName"
							label="UserName"
							name="userName"
							autoFocus
							onChange={handleChange}
							value={data.userName}
							error={errors.userName ? true : false}
							helperText={
								errors.userName ? errors.userName.message : null
							}
						/>
						<TextField
							{...register("password", {
								required: "Provide password!",
								minLength: {
									value: 6,
									message: "Atleast 6 characters required",
								},
							})}
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							onChange={handleChange}
							value={data.password}
							error={errors.password ? true : false}
							helperText={
								errors.password ? errors.password.message : null
							}
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
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								mt: 2,
							}}
						>
							<GoogleLogin
								clientId={`${process.env.REACT_APP_CLIENT_ID}`}
								onSuccess={onSuccess}
								onFailure={onFailure}
							/>
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	)
}

export default Login
