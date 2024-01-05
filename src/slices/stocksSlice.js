import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const stocksSlice = createSlice({
  name: 'stocks',
  initialState: {
    stocksList: [],
    selectedStock: null,
    selectedDate: moment().format()
  },
  reducers: {
    getStocks: (state) => {
      // Vou na api pegar as informação
      // vou pegar as informação e colocar no stocksList
    },
    setSelectedDate: (state) => {
      // Vou colocar a data no selectedDate
    },
    setSelectedStock: (state) => {
      // Vou colocar a ação no selectedStock
    }
  }
})

// Action creators are generated for each case reducer function
export const {  } = stocksSlice.actions

export default stocksSlice.reducer
