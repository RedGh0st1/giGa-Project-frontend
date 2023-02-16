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
          <h3>{games.image}</h3>
          hello
          <h3>{games.title}</h3>
          {games.platform}
          {games.genre}
          {games.number_of_players}
          {games.esrd_rating}
          {games.publisher}
          {games.developer}
          {games.release_date}
          {games.present}
          {games.digital}
          {games.description}
        </section>
        <div className="navigation">
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
