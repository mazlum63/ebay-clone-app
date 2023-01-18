import { createSlice } from "@reduxjs/toolkit";

const signinSlice = createSlice({
    name: 'signin',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            const registeredUser = action.payload.users;
            const user = action.payload.user;
            if (registeredUser.length === 0) {
                alert('There is no user registered!')
            } else {
                registeredUser.map(item => {
                    if (item.email === user.email && item.pass === user.pass) {
                        state.user = item;
                        alert('Sign in is success!')
                    } else {
                        alert('Email or Password is wrong!')
                    }
                })
            }
        },
        logout: state => {
            state.user = null
        }
    }
})

export const { logout, login } = signinSlice.actions;

export default signinSlice.reducer;