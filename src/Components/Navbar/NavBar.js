import React from "react"
import { Link } from "react-router-dom"
import "../Navbar/Navbar.css"

export default function NavBar() {
  return (
    <nav className="Navbar">
      <h1>
        <Link to="/" className="logo">
          GigA
        </Link>
      </h1>
      <div className="movebtn1">
        <Link to="/games" className="list">
          List of Games
        </Link>
      </div>
      <div className="movebtn">
        <button className="add-button">
          <Link to="/games/new">Add a new game</Link>
        </button>
      </div>
    </nav>
  )
}
