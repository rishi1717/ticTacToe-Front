import React from "react"
import UserNavBar from "../components/userNavbar"
import GuestNavBar from "../components/guestNavbar"

function Landing() {
	return (
		<>
			<GuestNavBar />
            <UserNavBar />
		</>
	)
}

export default Landing
