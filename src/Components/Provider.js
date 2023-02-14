import { createContext, useContext, useState } from "react"
import axios from "axios"
import NavBar from "../Components/NavBar"
import Footer from "./Footer"

export const ArchiveContext = createContext()
export function useArchiveContextProvider() {
  return useContext(ArchiveContext)
}

export function ArchiveProvider(props) {
  const API = process.env.REACT_APP_API_URL
  const [game, setGames] = useState([])

  return (
    <ArchiveContext.Provider value={{ API, axios, game, setGames }}>
      <NavBar />
      {props}
      <Footer />
    </ArchiveContext.Provider>
  )
}
