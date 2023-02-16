import { createContext, useContext, useState } from "react"
import NavBar from "../Components/NavBar"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"
import axios from "axios"

//  this creates the use custom hook object which can be imported with useContext with data inside of it
export const ArchiveContext = createContext()

export function useArchiveContext() {
  return useContext(ArchiveContext)
}

// this
export const ArchiveProvider = ({ Children }) => {
  const navigate = useNavigate()
  const API = process.env.REACT_APP_API_URL
  const [games, setGames] = useState({
    title: " ",
    platform: " ",
    genre: " ",
    number_of_players: " ",
    ESRD_rating: " ",
    publisher: " ",
    developer: " ",
    release_date: " ",
    present: false,
    digital: false,
    image: " ",
    description: " ",
  })

  const addGames = (newGame) => {
    axios
      .post(`${API}/games`, newGame)
      .then(
        () => {
          navigate(`/games`)
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setGames(games)
  }
  const handleCheckboxChange = () => {
    setGames({ ...games, digital: !games.digital })
    setGames({ ...games, present: !games.present })
  }

  const handleTextChange = (event) => {
    setGames({ ...games, [event.target.id]: event.target.value })
  }

  return (
    <ArchiveContext.Provider
      value={{
        API,
        axios,
        games,
        setGames,
        handleCheckboxChange,
        handleSubmit,
        handleTextChange,
        addGames,
      }}
    >
      <NavBar />
      {Children}
      <Footer />
    </ArchiveContext.Provider>
  )
}
