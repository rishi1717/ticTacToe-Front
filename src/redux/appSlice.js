import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    darkTheme: false,
}

export const appSlice = createSlice({
    name: 'appReducer',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.darkTheme = action.payload
        }
    }
})

const {setTheme} = appSlice.actions

export default appSlice.reducer
export {setTheme}