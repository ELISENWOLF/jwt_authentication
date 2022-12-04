import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./Component/Context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import "./App.css";
import App from "./App";

if(process.env.NODE_ENV === 'production'){
  disableReactDevTools();
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
