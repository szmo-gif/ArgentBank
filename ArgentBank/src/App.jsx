import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './compoment/header/Header'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Footer from './compoment/footer/Footer'

function App() {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
