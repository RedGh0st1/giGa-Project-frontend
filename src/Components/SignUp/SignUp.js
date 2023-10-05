import { useState } from "react"
import "./SignUp.css"

export default function SignUp() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [image, setImage] = useState("")
  const [signedUp, setSignedUp] = useState(false)

  const handleTextChange = (e) => {}

  const handleSignUp = (e) => {
    e.preventDefault()
    setSignedUp(true)
  }

  return (
    <div className="SignUpForm">
      {!signedUp ? (
        <>
          <h1>Sign Up</h1>
          <form classname="signUpSubmit" onSubmit={handleSignUp}>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleTextChange}
              placeholder="Enter your username"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </>
      ) : (
        <p> Thank you for signing up! </p>
      )}
    </div>
  )
}
  
}
