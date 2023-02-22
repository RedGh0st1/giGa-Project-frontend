import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="nav">
      <h1>
        <Link to="/">
          <h1 className="logo">GigA</h1>
        </Link>
      </h1>
      <Link to="/games"> List of Games</Link>
      <button className="add-button">
        <Link to="/games/new">Add a new game</Link>
      </button>
    </nav>
  )
}
