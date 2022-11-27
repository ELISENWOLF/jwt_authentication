import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from './Context/AuthProvider'
import './main.css'

const Home = () => {

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    navigate('/linkpage')
  }

  return (
    <div className='main_container'>
      <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/lounge">Go to the Lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <br />
            <button onClick={logout}>Sign Out</button>
    </div>
  )
}

export default Home
