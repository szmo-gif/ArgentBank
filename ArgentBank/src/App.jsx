import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Headers />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
