import { Route, Routes, BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Webdes from "./pages/Webdes"
import Appdes from "./pages/Appdes"
import Graphdes from "./pages/Graphdes"
import Company from "./pages/Company"
import Locations from "./pages/Locations"
import Contact from "./pages/Contact"

function App() {


  return (
      <BrowserRouter>
    <main className="overflow-x-hidden w-screen">
      <Nav/>
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/webdesign" element={<Webdes/>}/>
          <Route path="/appdesign" element={<Appdes/>}/>
          <Route path="/graphicdesign" element={<Graphdes/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/locations" element={<Locations/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
    </main>
      </BrowserRouter>
  )
}

export default App
