import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

import logger from 'redux-logger'

import loginReducer from './slices/loginSlice'

const store = configureStore({
  reducer: {
    login: loginReducer
  }
}, applyMiddleware(logger) )

export default store;
