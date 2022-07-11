import React, { useEffect } from "react"
import AdminNavbar from "../../components/admin/AdminNavbar"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function AdminTournaments() {
	const navigate = useNavigate()
	const admin = useSelector((state) => state.admin.admin)
	useEffect(() => {
		if (!admin.token) {
			navigate("/admin")
		}
	}, [])
	return (
		<div>
			<AdminNavbar />
			AdminTournaments
		</div>
	)
}

export default AdminTournaments
