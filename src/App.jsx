import { Route, Routes, BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/Footer"
import Services from "./pages/services/services"
import Work from "./pages/work/work"


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
