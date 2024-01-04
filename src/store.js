import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

import logger from 'redux-logger'

const store = configureStore({
  reducer: {}
}, applyMiddleware(logger) )

export default store;
