import { Route, Routes } from "react-router-dom"

// Pages
import Edit from "../Pages/Edit"
import Home from "../Pages/Home/Home"
import Index from "../Pages/Index"
import Show from "../Pages/Show"
import New from "../Pages/New"
import Error from "../Pages/Error"
import SignUp from "./SignUp/SignUp"
import Login from "./Login/Login"

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Index />} />
      <Route path="/games/new" element={<New />} />
      <Route exact path="/games/:id" element={<Show />} />
      <Route path="/games/:id/edit" element={<Edit />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route />
      <Route />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
