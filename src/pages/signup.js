import React, { useState } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import HowToRegIcon from "@mui/icons-material/HowToReg"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Navbar from "../components/navbar"
import axios from "../axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

function Signup() {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()
	const [data, setData] = useState({
		fullName: "",
		userName: "",
		email: "",
		password: "",
	})
	const handleChange = ({currentTarget:input}) => {
		setData({...data,[input.name]:input.value})
		reset(data)
	}
	const onSubmit = async ()=>{
		try{
		await axios.post("users", data)
		navigate("/login")
		}
		catch(err){
			console.log(err.message)
		}
	}
	return (
		<>
			<Navbar />
			<Container component="main" maxWidth="xs">
				<Box
					sx={{
						marginTop: 3,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						mb: 2,
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<HowToRegIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit(onSubmit)}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									{...register("fullName", {
										required: "Provide Name!",
										minLength: {
											value: 2,
											message: "Atleast 2 characters required",
										},
									})}
									name="fullName"
									required
									fullWidth
									id="fullName"
									label="Full Name"
									autoFocus
									onChange={handleChange}
									value={data.fullName}
									error={errors.fullName ? true : false}
									helperText={
										errors.fullName ? errors.fullName.message : null
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register("userName", {
										required: "Provide userName!",
										minLength: {
											value: 6,
											message: "Atleast 6 characters required",
										},
									})}
									required
									fullWidth
									name="userName"
									label="User name"
									id="userName"
									onChange={handleChange}
									value={data.userName}
									error={errors.userName ? true : false}
									helperText={
										errors.userName ? errors.userName.message : null
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register("email", {})}
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									onChange={handleChange}
									value={data.email}
									error={errors.email ? true : false}
									helperText={
										errors.email ? errors.email.message : null
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register("password", {
										required: "Provide password!",
										minLength: {
											value: 6,
											message: "Atleast 6 characters required",
										},
									})}
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
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="cpassword"
									label="Confirm Password"
									type="password"
									id="cpassword"
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="#" onClick={()=>navigate('/login')} variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</>
	)
}

export default Signup
