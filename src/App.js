import RouteComponent from "./Components/RouteComponent"
import "./App.css"
import NavBar from "./Components/Navbar/NavBar"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="container">
      <NavBar />
      <RouteComponent />
      <Footer />
    </div>
  )
}

export default App
