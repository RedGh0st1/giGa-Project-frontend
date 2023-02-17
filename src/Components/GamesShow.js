import React from "react"
import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios"
const API = process.env.REACT_APP_API_URL

export default function GamesShow() {
  const { id } = useParams()
  const [games, setGames] = useState({})
  const navigated = useNavigate()

  function deleteGame() {
    axios
      .delete(`${API}/games/${id}`)
      .then(() => {
        navigated(`/games`)
      })
      .catch((err) => console.warn("catch", err))
  }

  const handleDelete = () => {
    deleteGame()
  }

  useEffect(() => {
    axios
      .get(`${API}/games/${id}`)
      .then((res) => {
        setGames(res.data)
      })
      .catch((c) => navigated("/"))
  }, [id, navigated])

  return (
    <article className="details">
      <>
        <section>
          <p>Image: {games.image}</p>
          <p>Title: {games.title}</p>
          <p>Platform: {games.platform}</p>
          <p>Genre: {games.genre}</p>
          <p>Number of Players: {games.number_of_players}</p>
          <p>ESRB Rating: {games.esrb_rating}</p>
          <p>Publisher: {games.publisher}</p>
          <p>Developer: {games.developer}</p>
          <p>Release Date: {games.release_date}</p>
          <p>Present Status: {games.present}</p>
          <p>Digital Status: {games.digital}</p>
          <p>Description: {games.description}</p>
        </section>
        <div className="showNavigation">
          <div>
            <Link to={`/games`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/games/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </>
    </article>
  )
}
