import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getStocks, setSelectedStock } from './slices/stocksSlice'

function StocksList() {
  const stocksList = useSelector(state => state.stocks.stocksList)
  const selectedDate = useSelector(state => state.stocks.selectedDate)
  const selectedStock = useSelector(state => state.stocks.selectedStock)
  const dispatch = useDispatch() 


  const getStocksEvent = (date) => dispatch(getStocks(date))
  const setSelectedStockEvent = (stock) => dispatch(setSelectedStock(stock))

  React.useEffect(() => {
    getStocksEvent(selectedDate)
  },[])

  return (
  <div class="flex flex-col">
  <div class="block w-full">

        <button 
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => getStocksEvent(selectedDate)}
        >
          Listar Ação
        </button>
  </div>

  <div class="block w-full">

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  Ação Da bolsa de valores
                </th>
                <th scope="col" class="px-6 py-3">
                </th>
            </tr>
        </thead>
        <tbody>
            {stocksList.map((elem, idx) => {
              return (
                <tr key={idx} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-1">
                      {elem.symbol}
                    </td>
                    <td class="px-1">
                      <button 
                        type="button"
                        class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => setSelectedStockEvent(elem.symbol)}
                      >
                        Selecionar Ação
                      </button>
                    </td>
                </tr>
              )
            })}
        </tbody>
    </table>
    </div>
</div>
  </div>

  );
}

export default StocksList;
