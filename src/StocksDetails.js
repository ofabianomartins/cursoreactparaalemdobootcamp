import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getStocks, setSelectedStock } from './slices/stocksSlice'

function StocksDetails() {
  const selectedStockObj = useSelector(state => state.stocks.selectedStockObj)
  const selectedDate = useSelector(state => state.stocks.selectedDate)
  const selectedStock = useSelector(state => state.stocks.selectedStock)
  const dispatch = useDispatch() 


  const getStocksEvent = (date) => dispatch(getStocks(date))
  const setSelectedStockEvent = (stock) => dispatch(setSelectedStock(stock))

  return (
  <div class="flex flex-col pl-2">
  <div class="block w-full">
        <button 
          type="button"
          disabled={true}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {selectedStock}
        </button>
        <button 
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => getStocksEvent(selectedDate)}
        >
          Mostrar detalhes
        </button>
  </div>

  <div class="block w-full">

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  Detalhes
                </th>
                <th scope="col" class="px-6 py-3">
                  Valores
                </th>
            </tr>
        </thead>
        <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-1">
                  Símbolo
                </td>
                <td class="px-1">
                  {selectedStockObj.symbol}
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-1">
                  Fechamento
                </td>
                <td class="px-1">
                  R$ {selectedStockObj.close}
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-1">
                  Abertura
                </td>
                <td class="px-1">
                  R$ {selectedStockObj.open}
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-1">
                  Máxima
                </td>
                <td class="px-1">
                  R$ {selectedStockObj.high}
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-1">
                  Mínima
                </td>
                <td class="px-1">
                  R$ {selectedStockObj.low}
                </td>
              </tr>
        </tbody>
    </table>
    </div>
</div>
  </div>

  );
}

export default StocksDetails;
