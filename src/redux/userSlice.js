import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:{},
}

export const userSlice = createSlice({
    name:'userReducer',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        deleteUser: (state, action) => {
            state.user = {}
        }
    }
})

const {setUser,deleteUser} = userSlice.actions

export default userSlice.reducer
export {setUser,deleteUser}