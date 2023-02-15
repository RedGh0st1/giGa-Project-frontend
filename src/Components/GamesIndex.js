import React from "react"
import { useEffect, useContext } from "react"
import { ArchiveContext } from "./Provider"

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
      {console.log("I render first")}
      <h1>My Games Library</h1>
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
              return <game key={game.id} game={game} />
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}
