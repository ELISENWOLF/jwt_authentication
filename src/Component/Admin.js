import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'

const Admin = () => {
  return (
    <div className="main_container">
      <h1>Admins Page</h1>
            <br />
            <p>You must have been assigned an Admin role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
    </div>
  )
}

export default Admin
