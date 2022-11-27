import { Routes, Route } from "react-router-dom";
import Register from "./Component/Register.js";
import Login from "./Component/Login.js";
import "./App.css";
import Admin from "./Component/Admin.js";
import Layout from "./Component/Layout.js";
import Home from "./Component/Home.js";
import LinkPage from "./Component/LinkPage.js";
import Lounge from "./Component/Lounge.js";
import Unauthorized from "./Component/Unauthorized.js";
import Editor from "./Component/Editor.js";
import Missing from "./Component/Missing.js";
import RequireAuth from "./Component/RequireAuth.js";

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="linkpage" element={<LinkPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* protected routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]}/>}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]}/>}>
            <Route path="editor" element={<Editor />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]}/>}>
            <Route path="lounge" element={<Lounge />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
