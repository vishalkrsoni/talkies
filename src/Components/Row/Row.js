import axiosInstance from "../../Config/AxiosInstance";
import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

    const BASE_URL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axiosInstance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className='row'>
        <h2>{ title }</h2>

        <div className="row__posters">
            {movies.map((movie) => (
                (isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                    <img key={movie.id}
                        className = {`row__poster ${isLargeRow && 'row__posterLarge'}`}
                        src={`${BASE_URL}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt = {movie.name} 
                    />
                )
            )}
        </div>
    </div>
  )
}

export default Row;
