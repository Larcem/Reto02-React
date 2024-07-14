import { getAllmovies,getAllgenres, deleteMovies } from "../api/api"
import { useEffect, useState } from "react"
import "./Movies.css"

function Movies() {
  const [movies, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  
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
 
  useEffect(() => {
    // Llamar a las funciones dentro del useEffect
    loadGenres();
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
          <p className="Movie__decription">{movie.description}</p>
          <div className="Movie__rating">
              <p className="Movie__calificacion">Rating: ({movie.rating}/5)</p>
              {Array.from({ length: movie.rating }).map((_, index) => (
                <span key={index} className="calificacion__estrella">
                  ⭐️
                </span>
              ))}
            </div>
          <div className="Movie__status">
            <button onClick={ async() =>{
                 const security =window.confirm("Estas seguro de borrar la pelicula?");
                 if(security){
                   await deleteMovies(movie.id);
                   await loadMovies();
                   await loadGenres();
                 }
              }
            } className="Movie__borrar">Borrar</button>
            <button className="Movie__editar">Editar</button>
          </div>
        </div>
      </div>
    ))

  )
}

export { Movies }