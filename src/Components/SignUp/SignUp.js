import { useState } from "react"
import "./SignUp.css"
import ErrorPage from "../Error/ErrorPage"

export default function SignUp() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [image, setImage] = useState("")
  const [signedUp, setSignedUp] = useState(false)
  const [error, setError] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  const handleTextChange = (e) => {
    const { id, value } = e.target

    if (!isValidEmail(value) || id === "email") {
      setError("Invalid email format")
    } else {
      setError(null)
    }

    if (id === "firstName") setFirstName(value)
    else if (id === "lastName") setLastName(value)
    else if (id === "username") setUsername(value)
    else if (id === "password") setPassword(value)
    else if (id === "email") setEmail(value)
    else if (id === "image") setImage(value)
  }

  const handleSignUp = (e) => {
    e.preventDefault()

    setTimeout(() => {
      console.log("User signed up successfully")
      setSignedUp(true)
    }, 1000)
  }

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }

  return (
    <div className="SignUpbody">
      {!signedUp ? (
        <div className="SignUpform">
          <h1 className="signUph1">Sign Up</h1>
          <form className="signUpSubmit" onSubmit={handleSignUp}>
            {error ? <ErrorPage error={error} /> : null}
            <label className="SignUpFirst_Name">
              First Name:
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleTextChange}
                placeholder="Enter your first Name"
                required
              />
            </label>

            <label className="SignUpLast_Name">
              Last Name:
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleTextChange}
                placeholder="Enter your Last Name"
                required
              />
            </label>

            <label className="SignUpUsername">
              Username:
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleTextChange}
                placeholder="Enter your username"
                required
              />
            </label>

            <label className="SignUpPassword">
              Password:
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handleTextChange}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </label>

            <label className="SignUpEmail">
              Email Address:
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleTextChange}
                placeholder="Enter your email"
                required
              />
            </label>

            <label className="SignUpImage">
              Image:
              <input
                type="file"
                id="image"
                value={image}
                onChange={handleTextChange}
                placeholder="Enter your image"
                required
              />
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Sign Up</button>
          </form>
        </div>
      ) : (
        <p> Thank you for signing up! </p>
      )}
    </div>
  )
}
