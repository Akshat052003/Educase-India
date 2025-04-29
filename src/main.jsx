import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { MyProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <MyProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/auth/signup' element={<SignUpPage/>} />
        <Route path='/auth/login' element={<LoginPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  </MyProvider>
)
