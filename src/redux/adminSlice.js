import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	admin: {},
}

export const adminSlice = createSlice({
	name: "adminReducer",
	initialState,
	reducers: {
		setAdmin: (state, action) => {
			state.admin = action.payload
		},
		deleteAdmin: (state, action) => {
			state.admin = {}
		},
	},
})

const { setAdmin, deleteAdmin } = adminSlice.actions
export { setAdmin, deleteAdmin }
export default adminSlice.reducer
