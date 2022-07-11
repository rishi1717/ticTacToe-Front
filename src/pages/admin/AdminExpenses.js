import React, { useEffect } from "react"
import AdminNavbar from "../../components/admin/AdminNavbar"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function AdminExpenses() {
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
			AdminExpenses
		</div>
	)
}

export default AdminExpenses
