import React, { useEffect, useState } from "react";
import { Card } from "../components/Cards";

export const List = () => {
  const [dataMovies, setDataMovies] = useState({ data: [], loading: false });
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const movies = await fetch("http://localhost:3000/movies");
    const moviesJSON = await movies.json();
    if (moviesJSON) {
      setDataMovies(() => ({ data: moviesJSON, loading: false }));
    }
  }
  return (
    <div className="row">
      {dataMovies.data.map((movie) => {
        return (
          <div className="col-sm-2" key={movie.id}>
            <Card movie={movie} />
          </div>
        );
      })}
    </div>
  );
};
