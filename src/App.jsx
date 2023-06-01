import { useState } from 'react'
import Cadastro from './paginas/cadastro'
import Habitos from './paginas/habitos'
import Historico from './paginas/historico'
import Hoje from './paginas/hoje'
import Login from './paginas/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro /> }/>
      <Route path="/habitos" element={<Habitos /> }/>
      <Route path="/hoje" element={<Hoje /> }/>
      <Route path="/historico"element={<Historico />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
