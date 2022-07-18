import { Box, Button } from "@mui/material"
import axios from "../axios"
import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function TournamentFooter({ tournament }) {
    const user = useSelector((state) => state.user.user)
    const navigate = useNavigate()
	return (
		<>
			<Box sx={{}}>
				<Button
					sx={{
						backgroundColor: "#990000",
						color: "#fff",
					}}
                    onClick={async () => {
                        const {data} = await axios.patch(`/tournament/leave/${tournament._id}`, {
                            user: user._id,
                        })
                        console.log(data)
                        navigate('/tournaments')
                    }}
				>
					Leave Tournament
				</Button>
			</Box>
		</>
	)
}

export default TournamentFooter
