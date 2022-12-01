import { Link, useNavigate } from "react-router-dom";
import useLogout from "../Hooks/useLogout";
import "./main.css";

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/linkpage");
  }

  return (
    <div className="main_container">
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
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Home;
