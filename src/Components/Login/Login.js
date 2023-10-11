import React from "react"
import { useState } from "react"
import "./Login.css"
import miles from "../../Assets/miles.jpg"

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
    <div className="login-container">
      <img src={miles} alt="miles" />
      <div className="text"> Welcome!!! join us and have fun!! </div>
      <div className="login-form">
        <h1 className="login_title">LOGIN</h1>
        <form className="username_password_form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label>
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
          </div>

          <div className="input-container">
            <label>
              Password:
              <input
                type="password"
                id="username"
                value={password}
                onChange={handleTextChange}
                placeholder="Enter your password"
                required
              />
            </label>
          </div>

          <button type="submit">LOGIN</button>
        </form>
        <p>
          Don't have an account? <a href="/signup"> Sign up</a>
        </p>
      </div>
    </div>
  )
}
