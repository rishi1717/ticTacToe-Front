import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AdminNavbar from "../../components/admin/AdminNavbar"

function AdminUsers() {
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
			AdminUsers
		</div>
	)
}

export default AdminUsers
