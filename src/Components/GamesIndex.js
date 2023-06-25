import React from "react"
import { useEffect, useState } from "react"
import Game from "./Game"
import axios from "axios"
const API = process.env.REACT_APP_API_URL

export default function GamesIndex() {
  const [games, setGames] = useState([])

  useEffect(() => {
    axios
      .get(`${API}/games`)
      .then((response) => setGames(response.data))
      .catch((c) => console.warn("catch", c))
  }, [])

  return (
    <div className="card">
      <h1>Game Archive</h1>
      <table>
        <thead>
          <tr>
            <th> Games</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => {
            return <Game key={game.id} game={game} />
          })}
        </tbody>
      </table>
    </div>
  )
}
