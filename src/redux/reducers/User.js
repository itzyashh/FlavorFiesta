import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName: 'dsfds',
    lastName: '',
    userId: '',
    userToken: '',
    userRole: '',
}

export const User = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        setUserToken: (state, action) => {
            state.userToken = action.payload
        },
        setUserRole: (state, action) => {
            state.userRole = action.payload
        },
    }
})

export const { setFirstName, setLastName, setUserId, setUserToken, setUserRole } = User.actions

export default User.reducer