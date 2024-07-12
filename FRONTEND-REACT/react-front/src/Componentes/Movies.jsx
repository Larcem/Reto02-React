import { getAllmovies } from "../api/api"
import { getAllgenres } from "../api/api"
import { useEffect, useState } from "react"
import "./Movies.css"

function Movies() {
  const [movies, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function loadMovies() {
      const rest = await getAllmovies();
      setMovie(rest.data);
      console.log(rest);
    }
    async function loadGenres() {
      const restg = await getAllgenres();
      setGenres(restg.data);
      console.log(restg);
    }

    loadGenres()
    loadMovies();
  }, []);
  const findGenreNameById = (genreId) => {
    const genre = genres.find(g => g.id === genreId);
    return genre ? genre.name : "Género Desconocido"
  };
  return (
    movies.map(movie => (
      <div className="Movies">
        <img src={movie.image} className="Movies__img" />
        <div className="Movie__contenido">
          <h1>{movie.name}</h1>
          <div>
            {movie.genres.map((genre, index) => (
              <button key={index}>{findGenreNameById(genre)}</button>
            ))}
          </div>
          <p>{movie.description}</p>
          <div className="Movie__rating">
              <p className="Movie__calificacion">Rating: ({movie.rating}/5)</p>
              {Array.from({ length: movie.rating }).map((_, index) => (
                <span key={index} className="calificacion__estrella">
                  ⭐️
                </span>
              ))}
            </div>

        </div>
      </div>
    ))

  )
}

export { Movies }