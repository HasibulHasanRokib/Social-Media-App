import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/Auth/Login"
import Profile from "./pages/Profile/Profile"

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
