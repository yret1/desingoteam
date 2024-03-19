import { Route, Routes, BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Webdes from "./pages/Webdes"
import Appdes from "./pages/Appdes"
import Graphdes from "./pages/Graphdes"

function App() {


  return (
    <main className="overflow-x-hidden w-screen">
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/webdesign" element={<Webdes/>}/>
          <Route path="/appdesign" element={<Appdes/>}/>
          <Route path="/graphicdesign" element={<Graphdes/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </main>
  )
}

export default App
