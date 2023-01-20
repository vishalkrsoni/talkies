import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen";

export const api_key = process.env.REACT_APP_TMDB_API_KEY;

function App() {
  // console.log(api_key,'apikey');
  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
}

export default App;
