import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="nav">
      <h1>
        <Link to="/">GigA</Link>
      </h1>
      <Link to="/games">Home</Link>
      <button>
        <Link to="/games/new">Add a game</Link>
      </button>
    </nav>
  )
}
