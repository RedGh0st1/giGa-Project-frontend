import "./Sidebar.css"
import React from "react"

export default function Sidebar() {
  return (
    <div className="sidebar_head">
      <div className="sidebar_inner">
        {/* <h2> GigA Games </h2> */}
        <ul className="sidebar_title">
          <li>Home</li>
          <li>Reviews</li>
          <li>Games</li>
          <li>Categories</li>
          <li>WishList</li>
        </ul>
      </div>
    </div>
  )
}
