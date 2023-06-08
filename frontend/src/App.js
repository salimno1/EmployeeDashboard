import React from "react";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Context } from "./context/Context";
import Dashboard from "./screens/Dashboard";
import LoginPage from "./screens/LoginPage";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <LoginPage />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
