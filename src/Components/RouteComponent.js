import Edit from "../Pages/Edit"
import Home from "../Pages/Home"
import Index from "../Pages/Index"
import Show from "../Pages/Show"
import New from "../Pages/New"
import Error from "../Pages/Error"
import { Route, Router, Routes } from "react-router-dom"

export default function RouteComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Index />} />
        <Route path="/games/new" element={<New />} />
        <Route exact path="/games/:id" element={<Show />} />
        <Route path="/games/:id/edit" element={<Edit />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}
