import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Webdes from "./pages/Webdes"
import Appdes from "./pages/Appdes"
import Graphdes from "./pages/Graphdes"
import Company from "./pages/Company"
import Locations from "./pages/Locations"
import Contact from "./pages/Contact"
import { useEffect } from "react"


const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null

}

function App() {

  return (
      <BrowserRouter>
    <main className="overflow-x-hidden w-screen">
      <Nav/>
      <ScrollToTop/>
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
