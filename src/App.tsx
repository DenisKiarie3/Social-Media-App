import { Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
export default function App() {
  return(
    <div className="min-h-screen bg-black text-grey-100 transition-opacity duration-700 pt-20">
      <Navbar/>
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
}
