import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Register from './Pages/Register'
import Login from './Pages/Login'
import Chat from './Pages/Chat'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/register" element={<Register/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/" element={<Chat/>} />

    </Routes>
    </BrowserRouter>
  )
}
