import React, { useEffect, useState } from "react"
// import { useContext } from "react"
// import { ArchiveContext } from "./Provider"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
const API = process.env.REACT_APP_API_URL
export default function GamesEdit() {
  // const {
  //   API,
  //   axios,
  //   setGames,
  //   games,
  //   handleCheckboxChange,
  //   handleTextChange,
  // } = useContext(ArchiveContext)

  const navigated = useNavigate()
  const { id } = useParams()

  const [games, setGames] = useState([])

  const updatedGames = (updatedGame) => {
    axios
      .put(`${API}/games/${id}`, updatedGame)
      .then(
        () => {
          console.log("TESTid", id)
          navigated(`/games/${id}`)
        },
        (error) => console.error(error)
      )
      .catch((c) => console.console.warn("catch", c))
  }

  const handleCheckboxChange = () => {
    setGames({ ...games, digital: !games.digital })
    setGames({ ...games, present: !games.present })
  }

  const handleTextChange = (event) => {
    setGames({ ...games, [event.target.id]: event.target.value })
  }
  useEffect(() => {
    axios.get(`${API}/games/${id}`).then(
      (response) => setGames(response.data),
      (error) => navigated(`/not-found`)
    )
  }, [id, navigated])

  const handleUpdatedSubmit = (event) => {
    event.preventDefault()
    updatedGames(games, id)
  }

  return (
    <div className="Edit">
      <form onSubmit={handleUpdatedSubmit} className="editFormBox">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={games.title}
          onChange={handleTextChange}
        />
        <label htmlFor="platform">Platform:</label>
        <input
          type="text"
          id="platform"
          value={games.platform}
          onChange={handleTextChange}
        />
        <label htmlFor="genre">Genre: </label>
        <input
          type="text"
          id="genre"
          value={games.genre}
          onChange={handleTextChange}
        />
        <label htmlFor="number_of_players">Number of Players: </label>
        <input
          type="text"
          id="number_of_players"
          value={games.number_of_players}
          onChange={handleTextChange}
        />
        <label htmlFor="esrd_rating">ESRD Rating:</label>
        <input
          type="text"
          id="ESRD_rating"
          value={games.esrd_rating}
          onChange={handleTextChange}
        />
        <label htmlFor="publisher">Publisher:</label>
        <input
          type="text"
          id="publisher"
          value={games.publisher}
          onChange={handleTextChange}
        />
        <label htmlFor="developer">Developer: </label>
        <input
          type="text"
          id="developer"
          value={games.developer}
          onChange={handleTextChange}
        />
        <label htmlFor="release date">Release Date: </label>
        <input
          type="text"
          id="release_date"
          value={games.release_date}
          onChange={handleTextChange}
        />
        <label htmlFor="present">Present:</label>
        <input
          type="checkbox"
          id="present"
          value={games.present}
          onChange={handleCheckboxChange}
          checked={games.present}
        />
        <label htmlFor="digital">Digital:</label>
        <input
          type="checkbox"
          id="digital"
          value={games.digital}
          onChange={handleCheckboxChange}
          checked={games.digital}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          value={games.image}
          onChange={handleTextChange}
        />
        <label htmlFor="description"></label>
        Description:
        <input
          type="text"
          id="description"
          value={games.description}
          onChange={handleTextChange}
        />
        <br />
        <input className="EditSubmitButton3" type="submit" value="Submit" />
      </form>
      <Link to={`/games/${id}`}>
        <button className="editCancelButton">Back!</button>
      </Link>
    </div>
  )
}
