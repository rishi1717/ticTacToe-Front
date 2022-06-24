import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/landing"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useSelector } from "react-redux"
import { CssBaseline } from "@mui/material"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Profile from "./pages/profile"
import Wallet from "./pages/wallet"
import { io } from "socket.io-client"

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
	const user = useSelector((state) => state.user.user)
	console.log(user)
	useEffect(() => {
		const socket = io("http://localhost:3001")
	}, [])
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
