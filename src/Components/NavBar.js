import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/"></Link>
      <Link to="/games">Home</Link>
      <Link to="/games/new">Add a game</Link>
    </div>
  )
}
