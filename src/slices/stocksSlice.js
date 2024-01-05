import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment'

import server from '../server'

export const getStocks = createAsyncThunk(
  'stocks/getStocks',
  async (date) => {
    // const response = await userAPI.fetchById(userId)
    // Vou na api pegar as informação
    // vou pegar as informação e colocar no stocksList
    
    return server.get('/prices/2024-01-05?security_types=STOCK&origin=b3')
      .then(response => {
        return response.data
      })
      .then(stocks => {
        function compare( a, b ) {
          if ( a.symbol < b.symbol ){
            return -1;
          }
          if ( a.symbol > b.symbol ){
            return 1;
          }
          return 0;
        }

        return stocks.sort( compare );
      })
  }
)

export const stocksSlice = createSlice({
  name: 'stocks',
  initialState: {
    stocksList: [],
    selectedStock: null,
    selectedStockObj: {},
    selectedDate: moment().format('YYYY-MM-DD')
  },
  reducers: {
    setSelectedDate: (state, action) => {
      // Vou colocar a data no selectedDate
      state.selectedDate = action.payload
    },
    setSelectedStock: (state, action) => {
      // Vou colocar a ação no selectedStock
      state.selectedStock = action.payload
      state.selectedStockObj = state.stocksList.filter(elem => elem.symbol == action.payload)[0] || {}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getStocks.fulfilled, (state, action) => {
      state.stocksList = action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedDate, setSelectedStock  } = stocksSlice.actions

export default stocksSlice.reducer
