import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/landing"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useDispatch, useSelector } from "react-redux"
import { CssBaseline } from "@mui/material"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Profile from "./pages/profile"
import Wallet from "./pages/wallet"
import { io } from "socket.io-client"
import dotenv from "dotenv"
import axios from "./axios"
import { setUser } from "./redux/userSlice"
dotenv.config()

const light = {
	palette: {
		mode: "light",
	},
}

const dark = {
	palette: {
		mode: "dark",
	},
}

function App() {
	const appState = useSelector((state) => state.app)
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user.user)
	useEffect(() => {
		;(async () => {
			const socket = io(process.env.REACT_APP_SERVER)
			if (user.token) {
				socket.emit("active", { _id: user._id })
			} else {
				if (!user.guestId) {
					try {
						const res = await axios.post("/guests", {})
						dispatch(setUser(res.data.guest))
					} catch (e) {
						console.log(e)
					}
				}
			}
		})()
	}, [user])
	return (
		<ThemeProvider
			theme={appState.darkTheme ? createTheme(dark) : createTheme(light)}
		>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/wallet" element={<Wallet />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
