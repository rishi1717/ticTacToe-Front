import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useRef, useState } from "react"
import SendIcon from "@mui/icons-material/Send"

const staticMessages = [
	{ user: "one", message: "Hello" },
	{ user: "two", message: "Hi" },
	{ user: "one", message: "How are you?" },
	{ user: "two", message: "I'm fine" },
	{ user: "one", message: "What are you doing rn?" },
	{ user: "two", message: "I'm playing a game" },
	{ user: "one", message: "I'm playing a game too" },
	{ user: "two", message: "What game are you playing?" },
	{ user: "one", message: "I'm playing tic tac toe" },
	{ user: "two", message: "I'm playing that too" },
	{ user: "one", message: "I'm playing with someone" },
	{ user: "two", message: "I'm playing with someone too" },
	{ user: "one", message: "I'm chatting with that guy" },
	{ user: "two", message: "I'm chatting with that guy too" },
	{ user: "one", message: "Wow!!" },
	{ user: "two", message: "Wow!!" },
]

function ChatBox() {
	const bottomRef = useRef(null)

	const [message, setMessage] = useState("")

	const [messages, setMessages] = useState(staticMessages)

	const handleChange = (event) => {
		setMessage(event.target.value)
	}

	const handleSendMessage = () => {
		console.log(messages)
		setMessages([...messages, { user: "one", message }])
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
				<Typography
					sx={{
						fontSize: "1.1rem",
						display: "flex",
						justifyContent: "center",
						fontWeight: "bold",
						padding: 1,
					}}
				>
					Chatbox
				</Typography>
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
									message.user === "one" ? "flex-end" : "flex-start",
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
										message.user === "one"
											? " 0.7rem 0 0.7rem 0.7rem"
											: "0 0.7rem 0.7rem 0.7rem",
								}}
								elevation={10}
							>
								{message.user !== "one" && (
									<span
										style={{
											fontSize: "0.8rem",
											color: "grey",
										}}
									>
										{message.user}
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
