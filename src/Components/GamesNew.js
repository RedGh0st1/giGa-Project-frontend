import React from "react"
import { useState, Link } from "react"
import { useNavigate } from "react-router-dom"
// import { ArchiveContext } from "./Provider"
import axios from "axios"
const API = process.env.REACT_APP_API_URL
export default function GamesNew() {
  // const {API, games, setGames, handleCheckboxChange, handleSubmit, handleTextChange } =
  //   useContext(ArchiveContext)
  let navigated = useNavigate()
  const [games, setGames] = useState({
    title: " ",
    platform: " ",
    genre: " ",
    number_of_players: " ",
    esrd_rating: " ",
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
          navigated(`/games`)
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  const handleCheckboxChange = () => {
    setGames({ ...games, digital: !games.digital })
    setGames({ ...games, present: !games.present })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addGames(games)
  }
  const handleTextChange = (event) => {
    setGames({ ...games, [event.target.id]: event.target.value })
  }

  return (
    <div className="new">
      <form onSubmit={handleSubmit} className="newFormBox">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={games.title}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="platform">Platform: </label>
        <input
          type="text"
          id="platform"
          value={games.platform}
          onChange={handleTextChange}
        />

        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={games.genre}
          onChange={handleTextChange}
        />

        <label htmlFor="number-of_players">Number of Players: </label>
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

        <label htmlFor="developer">Developer:</label>
        <input
          type="text"
          id="developer"
          value={games.developer}
          onChange={handleTextChange}
        />

        <label htmlFor="release date">Release Date:</label>
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

        <label htmlFor="digital">Digital: </label>
        <input
          type="checkbox"
          id="digital"
          value={games.digital}
          onChange={handleCheckboxChange}
          checked={games.digital}
        />

        <label htmlFor="image"> Image: </label>
        <input
          type="text"
          id="image"
          value={games.image}
          onChange={handleTextChange}
        />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          value={games.description}
          onChange={handleTextChange}
        />
        <br />
        <input className="newInput" type="submit" value="Submit" />
        <Link to={`/`}>
          <button className="">Back</button>
        </Link>
      </form>
    </div>
  )
}
