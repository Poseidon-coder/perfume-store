import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Homepage from './components/Page/HomePage'






function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<MainLayout />} />
      
      <Route path='/' element={<Homepage/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App