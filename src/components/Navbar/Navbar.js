import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">Countries</Link>

        {/* <buton>
            dark
        </buton> */}
    </div>
  )
}
