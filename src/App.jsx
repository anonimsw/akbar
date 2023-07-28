import React from 'react'
import Sign_in from './pages/Sign_in'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sign_up from './pages/Sign_up'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Sign_in />} />
      <Route path="/sign_up" element={<Sign_up />} />
    </Routes>
  )
}

export default App