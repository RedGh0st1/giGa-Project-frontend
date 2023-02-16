import React from "react"
import { ArchiveContext } from "./Provider"
import { useContext, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

export default function GamesShow() {
  const { API, axios, games, setGames } = useContext(ArchiveContext)
  const { id } = useParams()
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
      .catch((c) => {
        console.warn("catch", c)
      })
  }, [API, axios, setGames, id, games])
  const [
    title,
    platform,
    genre,
    number_of_players,
    esrd_rating,
    publisher,
    developer,
    present,
    release_date,
    digital,
    image,
    description,
  ] = games
  return (
    <article className="details">
      <>
        <section>
          <h3>{image}</h3>
          <h3>{title}</h3>
          {platform}
          {genre}
          {number_of_players}
          {esrd_rating}
          {publisher}
          {developer}
          {release_date}
          {present}
          {digital}
          {description}
        </section>
        <div className="navigation">
          <div>
            <Link to={`/games`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/games/${games.id}/edit`}>
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
