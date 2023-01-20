import React, { useState, useEffect } from "react";
import axiosInstance from "../../Config/AxiosInstance";
import requests from "../Requests/Requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axiosInstance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log("movie on the Banner display", movie);
  const truncateDescription = (string, len) =>
    string?.length > len ? string.substr(0, len - 1) + "..." : string;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncateDescription(movie?.overview, 150)}
        </h2>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
