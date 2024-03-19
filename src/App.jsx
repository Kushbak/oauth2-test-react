import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Secure from './pages/Secure'
import './App.css'
import { useEffect, useState } from 'react'
import { getCookie } from './utils/cookie'

function App() {
  const [loading, setLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    if (!isLoggedIn && getCookie(import.meta.env.VITE_TC)) {
      setIsLoggedIn(true)
    } else {
      navigate('/')
    }
    setLoading(false)
  }, [])

  if (loading) return 'Loading...'
  return (
    <Routes>
      <Route path='/' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='/secure' element={<Secure />} />
    </Routes>
  )
}

export default App
