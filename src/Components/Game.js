import React from "react"
import { Link } from "react-router-dom"

export default function Game({ game }) {
  return (
    <div>
      <tr>
        <td>
          {game.present ? <span>⭐️</span> : <span>&nbsp; &nbsp; &nbsp;</span>}
        </td>
        <td>
          <a href={game.url} target="_blank" rel="noreferrer">
            {game.title}
          </a>
        </td>
        <td>
          <Link to={`/games/${game.id}`}>✏️</Link>
        </td>
      </tr>
    </div>
  )
}
