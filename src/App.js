import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/landing"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useSelector } from "react-redux"
import { CssBaseline } from "@mui/material"
import Login from "./pages/login"

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
  // console.log(appState)
	return (
		<ThemeProvider
			theme={appState.darkTheme ? createTheme(dark) : createTheme(light)}
		>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
