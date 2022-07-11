import React, { useEffect } from "react"
import AdminNavbar from "../../components/admin/AdminNavbar"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function AdminDash() {
	const navigate = useNavigate()
	const admin = useSelector((state) => state.admin.admin)
	useEffect(() => {
		if (!admin.token) {
			navigate("/admin")
		}
	}, [])
	return (
		<>
			<AdminNavbar />
			Dash
		</>
	)
}

export default AdminDash
