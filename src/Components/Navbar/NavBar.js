import React from "react"
import { Link } from "react-router-dom"
import "../Navbar/Navbar.css"

export default function NavBar() {
  return (
    <nav className="navbar_head">
      <div className="navbar_container">
        <h1 className="home_button_giga">
          <Link to="/" className="home_giga">
            GigA
          </Link>
        </h1>

        <div className="button_games">
          <Link to="/games" className="games_button">
            Games
          </Link>
        </div>

        <div className="new_games">
          <button className="new_games_button">
            <Link to="/games/new">Add a new game</Link>
          </button>
        </div>

        <div className="login_button">
          <Link to="/login" className="log_in_button">
            Log In
          </Link>
          <Link to="/signup" className="signup_button">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}
