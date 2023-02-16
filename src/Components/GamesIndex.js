import React from "react"
import { useEffect, useContext } from "react"
import { ArchiveContext } from "./Provider"
import Game from "./Game"

export default function GamesIndex() {
  const { games, setGames, API, axios } = useContext(ArchiveContext)

  useEffect(() => {
    axios
      .get(`${API}/games`)
      .then((response) => setGames(response.data))
      .catch((c) => console.warn("catch", c))
  }, [API, axios, setGames])

  return (
    <div className="games">
      <h1>Game Archive</h1>
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this Games</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => {
              return <Game key={game.id} game={game} />
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}
