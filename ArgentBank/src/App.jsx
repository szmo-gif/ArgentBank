import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './compoment/header/Header'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Footer from './compoment/footer/Footer'


function App() {

  const isConnected = useSelector((state) => state.auth.isConnected);


  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={isConnected ? <Profile /> : <Navigate to="/login" />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
