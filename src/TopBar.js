import React from 'react'
import { useDispatch } from 'react-redux'

import { logout } from './slices/loginSlice'

function TopBar() {
  const dispatch = useDispatch() 


  const logoutOnClick = () => dispatch(logout())

  return (
    <div className="App">
      <h1 className="mt-10 font-bold underline">
        Usuário logado
      </h1>

      <button onClick={logoutOnClick}>Deslogar</button>
    </div>
  );
}

export default TopBar;
