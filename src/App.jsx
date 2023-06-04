import { useState } from 'react'
import Cadastro from './paginas/cadastro'
import Habitos from './paginas/habitos'
import Historico from './paginas/historico'
import Hoje from './paginas/hoje'
import Login from './paginas/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserContext } from './context/UserContext'

function App() {

  const [usuario, setUsuario] = useState({});

  return (
    <BrowserRouter>
    <UserContext.Provider value={{usuario, setUsuario}}>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro /> }/>
      <Route path="/habitos" element={<Habitos /> }/>
      <Route path="/hoje" element={<Hoje /> }/>
      <Route path="/historico"element={<Historico />}/>
    </Routes>
    </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
