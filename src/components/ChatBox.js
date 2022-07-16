import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useRef, useState } from "react"
import SendIcon from "@mui/icons-material/Send"
import { io } from "socket.io-client"

function ChatBox({ user, matchData, messages, setMessages }) {
	const socket = io(process.env.REACT_APP_SERVER)

	const bottomRef = useRef(null)

	const [message, setMessage] = useState("")

	const handleChange = (event) => {
		setMessage(event.target.value)
	}

	const handleSendMessage = () => {
		socket.emit("newMessage", {
			sender: user._id,
			matchData: matchData,
			message: message,
		})
		setMessages([...messages, { sender: user._id, message: message }])
		setMessage("")
	}

	useEffect(() => {
		bottomRef.current.scrollIntoView({ behavior: "smooth" })
	}, [messages])

	return (
		<div>
			<Paper
				sx={{
					height: "84vh",
					margin: 2,
				}}
			>
				<Grid
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Typography
						sx={{
							fontSize: "0.8rem",
							display: "flex",
							justifyContent: "center",
							paddingTop: 2,
						}}
					>
						{matchData.player1.userName}
					</Typography>
					<Typography
						sx={{
							fontSize: "1.1rem",
							display: "flex",
							justifyContent: "center",
							fontWeight: "bold",
							padding: 1,
							color: "#4EADFE",
						}}
					>
						Chat
					</Typography>
					<Typography
						sx={{
							fontSize: "0.8rem",
							display: "flex",
							justifyContent: "center",
							paddingTop: 2,
						}}
					>
						{matchData.player2.userName}
					</Typography>
				</Grid>
				<Grid
					sx={{
						height: "67vh",
						overflowY: "scroll",
						"&::-webkit-scrollbar": {
							width: 5,
						},
						"&::-webkit-scrollbar-track": {
							background: "#f1f1f1",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "#888888",
							borderRadius: 2,
						},
					}}
				>
					{messages.map((message, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								justifyContent:
									message.sender === user._id
										? "flex-end"
										: "flex-start",
							}}
						>
							<Paper
								sx={{
									display: "flex",
									flexDirection: "column",
									mx: 2,
									mb: 2,
									px: 2,
									py: 0.8,
									borderRadius:
										message.sender === user._id
											? " 0.7rem 0 0.7rem 0.7rem"
											: "0 0.7rem 0.7rem 0.7rem",
								}}
								elevation={10}
							>
								{message.user === user._id && (
									<span
										style={{
											fontSize: "0.8rem",
											color: "grey",
										}}
									>
										{message.sender}
									</span>
								)}
								{message.message}
							</Paper>
						</Box>
					))}
					<div ref={bottomRef} />
				</Grid>
				<Grid
					sx={{
						margin: 1,
						position: "sticky",
						bottom: 0,
					}}
				>
					<TextField
						sx={{
							width: "75%",
						}}
						value={message}
						onChange={handleChange}
						onSubmit={handleSendMessage}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								handleSendMessage()
							}
						}}
					></TextField>
					<Button
						sx={{
							height: "3rem",
							width: "2rem",
						}}
						onClick={handleSendMessage}
					>
						<SendIcon />
					</Button>
				</Grid>
			</Paper>
		</div>
	)
}

export default ChatBox
