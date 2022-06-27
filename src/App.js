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
import FriendList from "./pages/friendList"
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
			if (!user._id) {
				try {
					const res = await axios.post("/guests", {})
					socket.emit("connection", { _id: res.data.guest._id })
					dispatch(setUser(res.data.guest))
				} catch (e) {
					console.log(e)
				}
			} else {
				socket.emit("connection", { _id: user._id })
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
					<Route path="/friendlist" element={<FriendList />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
