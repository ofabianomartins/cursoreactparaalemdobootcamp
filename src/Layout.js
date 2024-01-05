import React from 'react'
import { useSelector } from 'react-redux'

import Login from './Login'
import TopBar from './TopBar'
import StocksList from './StocksList'
import StocksDetails from './StocksDetails'

function Layout() {
  const userLogon = useSelector(state => state.login.userLogon)

  return (
    <div className="flex justify-center">
      {!userLogon && <Login />}
      {userLogon && <div className="container">
        <TopBar /> 
        <div className='container flex'>
          <div className='block w-1/2'>
            <StocksList />
          </div>
          <div className='block w-1/2'>
            <StocksDetails />
          </div>
        </div>

      </div>} 
    </div>
  );
}

export default Layout;
