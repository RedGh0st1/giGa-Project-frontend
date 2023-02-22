import React from "react"
import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios"
// import Show from "../Pages/Show"
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
        {/* <Show games={games.title} /> */}
        <section>
          <p>Image: {games.image}</p>
          <p>Title: {games.title}</p>
          <p>Platform: {games.platform}</p>
          <p>Genre: {games.genre}</p>
          <p>Number of Players: {games.number_of_players}</p>
          <p>ESRD Rating: {games.esrd_rating}</p>
          {/* need a conditional statement for ESRD-logo */}
          <p>Publisher: {games.publisher}</p>
          <p>Developer: {games.developer}</p>
          <p>Release Date: {games.release_date}</p>
          {/* need function to get actually date  */}
          <p>Present Status: {games.present}</p>
          {/* need conditional statement to get logo possible colored check or x */}
          <p>Digital Status: {games.digital}</p>
          {/* need conditional statement to get digital or cd logo */}
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
