import React from "react"
import { useArchiveContext } from "./Provider"
import { useContext, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function GamesShow() {
  const { API, axios, game, setGames } = useContext(useArchiveContext)
  const { id } = useParams()
  const navigate = useNavigate()

  const deleteGame = () => {
    axios
      .delete(`${API}/games/${id}`)
      .then(() => {
        navigate(`/games`)
      })
      .catch((err) => console.warn("catch", err))
  }

  useEffect(() => {
    axios
      .get(`${API}/games/${id}`)
      .then((res) => {
        setGames(res.data)
      })
      .catch((err) => {
        console.warn("catch", err)
      })
  }, [API, axios, setGames, id])
  // Adding the missing values to the dependency array will ensure that the useEffect
  // hook will run every time one of the values in the array changes.
  // This will ensure that the API call is made whenever one of the values changes,
  // and that the data received from the API call is used to set the state of the games correctly.

  return <div>gamesShow</div>
}
