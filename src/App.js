import RouteComponent from "./Components/RouteComponent"
import "./App.css"
import NavBar from "./Components/Navbar/NavBar"
import Footer from "./Components/Footer/Footer"
import Sidebar from "./Components/Sidebar/Sidebar"

function App() {
  return (
    <div className="container">
      <NavBar />
      <Sidebar />
      <RouteComponent />
      <Footer />
    </div>
  )
}

export default App
