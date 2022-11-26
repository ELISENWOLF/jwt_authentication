import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from "./Component/Register/Register";
import Signin from "./Component/Signin/Signin";
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Register /> }/>
          <Route path='/signin' element={ <Signin /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
