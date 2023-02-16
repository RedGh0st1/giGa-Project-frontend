import React from "react"
import { useContext } from "react"
import { ArchiveContext } from "./Provider"

export default function GamesNew() {
  const { games, handleCheckboxChange, handleSubmit, handleTextChange } =
    useContext(ArchiveContext)
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
    <div className="new">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="platform">Platform: </label>
        <input
          type="text"
          id="platform"
          value={platform}
          onChange={handleTextChange}
        />

        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={handleTextChange}
        />

        <label htmlFor="number-of_players">Number of Players: </label>
        <input
          type="text"
          id="number_of_players"
          value={number_of_players}
          onChange={handleTextChange}
        />

        <label htmlFor="esrd_rating">ESRD Rating:</label>
        <input
          type="text"
          id="ESRD_rating"
          value={esrd_rating}
          onChange={handleTextChange}
        />

        <label htmlFor="publisher">Publisher:</label>
        <input
          type="text"
          id="publisher"
          value={publisher}
          onChange={handleTextChange}
        />

        <label htmlFor="developer">Developer:</label>
        <input
          type="text"
          id="developer"
          value={developer}
          onChange={handleTextChange}
        />

        <label htmlFor="release date">Release Date:</label>
        <input
          type="text"
          id="release_date"
          value={release_date}
          onChange={handleTextChange}
        />

        <label htmlFor="present">Present:</label>
        <input
          type="checkbox"
          id="present"
          value={present}
          onChange={handleCheckboxChange}
          checked={present}
        />

        <label htmlFor="digital">Digital: </label>
        <input
          type="checkbox"
          id="digital"
          value={digital}
          onChange={handleCheckboxChange}
          checked={digital}
        />

        <label htmlFor="image"> Image: </label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={handleTextChange}
        />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
