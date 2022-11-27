import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'

const Missing = () => {
  return (
    <div className="main_container">
       <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div className="flexGrow">
                <Link to="/">Visit Our Homepage</Link>
            </div>
    </div>
  )
}

export default Missing
