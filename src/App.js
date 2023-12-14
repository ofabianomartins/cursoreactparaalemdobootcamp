import React from 'react'

import server from './server'

function App() {
  const [securityType, setSecurityType] = React.useState("Tangamandápio")
  const [list, setList] = React.useState([])

  React.useEffect(() => { 
    server.get(`/prices/2023-12-13?security_types=${securityType}`)
      .then(resp => setList(resp.data))
  }, [list, securityType])

  return (
    <div className="App">
      <select onChange={(target) => { 
        setSecurityType(target.currentTarget.value)} }>
        <option>INDEX</option>
        <option>STOCK</option>
        <option>FII</option>
      </select>
      <div>{securityType}</div>
      <ul>
        {list.map((elem) => <li> {elem.symbol}</li>)}
      </ul>
    </div>
  );
}

export default App;
