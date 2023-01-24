import React from "react";
// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

import "./App.css";

export const api_key = process.env.REACT_APP_TMDB_API_KEY;

function App() {
  // console.log(api_key,'apikey');
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomeScreen />}></Route>
          <Route path="/login" exact element={<LoginScreen />}></Route>

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
