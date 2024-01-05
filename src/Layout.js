import React from 'react'
import { useSelector } from 'react-redux'

import Login from './Login'
import TopBar from './TopBar'

function Layout() {
  const userLogon = useSelector(state => state.login.userLogon)

  return (
    <div className="flex justify-center">
      {!userLogon && <Login />}
      {userLogon && <div className="container">
        <TopBar /> 
      </div>} 
    </div>
  );
}

export default Layout;
