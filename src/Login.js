import React from 'react'
import { useDispatch } from 'react-redux'

import { login } from './slices/loginSlice'

function Login() {
  const dispatch = useDispatch() 

  const loginOnClick = () => dispatch(login())

  return (
    <div>
      <button onClick={loginOnClick}>Clique para Logar</button>
    </div>
  );
}

export default Login;
