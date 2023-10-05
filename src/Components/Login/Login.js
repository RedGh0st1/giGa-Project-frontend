import React from "react"
import { useState } from "react"
import "./Login.css"

export default function Login() {
  const [userIdentifier, setuserIdentifier] = useState("")
  const [password, setPassword] = useState("")

  const handleTextChange = (e) => {
    if (e.target.id === "userIdentifier") {
      setuserIdentifier(e.target.value)
    } else if (e.target.id === "password") {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="LogIn-form">
      <h1 className="login_title">Log In</h1>
      <form className="username_password_form" onSubmit={handleSubmit}>
        <label className="login_label">
          Email/Username:
          <input
            type="text"
            id="userIdentifier"
            value={userIdentifier}
            onChange={handleTextChange}
            placeholder="Enter your email or username"
            required
          />
        </label>
        <label className="password_label">
          Password:
          <input
            type="password"
            id="username"
            value={password}
            onChange={handleTextChange}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}
