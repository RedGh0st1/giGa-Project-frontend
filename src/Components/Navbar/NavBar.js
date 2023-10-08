import React from "react"
import { Link } from "react-router-dom"
import "../Navbar/Navbar.css"

export default function NavBar() {
  return (
    <nav className="nav">
      <h1 className="h1logoheader">
        <Link to="/" className="logo">
          GigA
        </Link>
      </h1>

      <div className="movebtn1">
        <Link to="/games" className="list">
          Games
        </Link>
      </div>

      <div className="movebtn">
        <button className="add-button">
          <Link to="/games/new">Add a new game</Link>
        </button>
      </div>

      <div className="auth_buttons">
        <Link to="/login" className="login">
          Log In
        </Link>
        <Link to="/signup" className="signup">
          Sign Up
        </Link>
      </div>
    </nav>
  )
}
