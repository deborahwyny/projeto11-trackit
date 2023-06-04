import { useState } from 'react'
import Cadastro from './paginas/cadastro'
import Habitos from './paginas/habitos'
import Historico from './paginas/historico'
import Hoje from './paginas/hoje'
import Login from './paginas/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserContext } from './context/UserContext'
import { ProgressoContext } from './context/ProgressoContext'

function App() {

  const [usuario, setUsuario] = useState({});
  const [progresso, setProgresso] = useState(0);

  return (
    <BrowserRouter>
    <ProgressoContext.Provider value={{progresso, setProgresso}}>
    <UserContext.Provider value={{usuario, setUsuario}}>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro /> }/>
      <Route path="/habitos" element={<Habitos /> }/>
      <Route path="/hoje" element={<Hoje /> }/>
      <Route path="/historico"element={<Historico />}/>
    </Routes>
    </UserContext.Provider>
    </ProgressoContext.Provider>
    </BrowserRouter>
  )
}

export default App
