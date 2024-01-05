import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

// import { createLogger } from 'redux-logger'

import loginReducer from './slices/loginSlice'
import stocksReducer from './slices/stocksSlice'

// const middlewares = [ createLogger() ]

const store = configureStore({
  reducer: {
    login: loginReducer,
    stocks: stocksReducer
  }
})

export default store;
