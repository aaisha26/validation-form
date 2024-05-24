import React from "react";
import { HashRouter , Route, Routes } from "react-router-dom";
import Form from "./components/FormComponents";
import UserDetails from "./components/Success";
import "./App.css" ;

function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>Sign Up Form</h1>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/UserDetails" element={<UserDetails/>} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
