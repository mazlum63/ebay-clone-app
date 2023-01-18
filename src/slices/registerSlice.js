import { createSlice } from "@reduxjs/toolkit";


export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        users: []
    },
    reducers: {
        register: (state, action) => {
            if (state.users.some(item => item.email === action.payload.email)) {
                alert('this email already registered')
            } else {
                state.users.push(action.payload)
                alert('registration is successfull!')
            }
        }
    }
})


export const { register } = registerSlice.actions
export default registerSlice.reducer