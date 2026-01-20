import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Libros from "./pages/Libros"
import Ubicacion from "./pages/Ubicacion"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
        </Routes>
      </main>
    </>
  )
}

export default App