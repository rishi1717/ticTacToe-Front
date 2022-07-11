import { Avatar, Box } from "@mui/material"
import React, { useEffect, useState } from "react"
import AdminNavbar from "../../components/admin/AdminNavbar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import InputIcon from "@mui/icons-material/Input"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "../../axios"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { setAdmin } from "../../redux/adminSlice"

const Toast = Swal.mixin({
	background: "#1E1E1E",
	color: "white",
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timerProgressBar: true,
})

function AdminLanding() {
	const [error, setError] = useState("")
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const admin = useSelector((state) => state.admin.admin)
	useEffect(() => {
		if (admin.token) {
			navigate("/admin/dashboard")
		}
	}, [])
	const [data, setData] = useState({
		email: "",
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
		setError("")
	}
	const onSubmit = async () => {
		try {
			const res = await axios.post("admin", data)
			dispatch(setAdmin(res.data.admin))
			Toast.fire({
				position: "bottom-right",
				icon: "success",
				title: "admin Logged in",
				showConfirmButton: false,
				timer: 3000,
			})
			navigate("/admin/dashboard")
		} catch (err) {
			setError(err.response.data.message)
		}
	}
	return (
		<>
			<AdminNavbar />
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					padding: "2rem",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<InputIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Admin Sign in
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					sx={{ mt: 1 }}
				>
					<TextField
						{...register("email", {
							required: "Provide email!",
							minLength: {
								value: 6,
								message: "Atleast 6 characters required",
							},
						})}
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email"
						name="email"
						autoFocus
						onChange={handleChange}
						value={data.email}
						error={errors.email ? true : false}
						helperText={errors.email ? errors.email.message : null}
					/>
					<TextField
						{...register("password", {
							required: "Provide password!",
							minLength: {
								value: 5,
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
						helperText={errors.password ? errors.password.message : null}
					/>
					{error && (
						<Typography
							sx={{
								color: "red",
								textAlign: "center",
							}}
						>
							{error}
						</Typography>
					)}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
				</Box>
			</Box>
		</>
	)
}

export default AdminLanding
