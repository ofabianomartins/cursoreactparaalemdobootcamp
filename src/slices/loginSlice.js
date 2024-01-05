import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userLogon: false
  },
  reducers: {
    login: state => {
      state.userLogon = true
    },
    logout: state => {
      state.userLogon = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions

export default loginSlice.reducer
