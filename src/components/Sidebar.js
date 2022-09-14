import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
            <NavLink exact to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/docs'>Documents</NavLink>
        </li>
        <li>
            <NavLink to='/component'>Components</NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
