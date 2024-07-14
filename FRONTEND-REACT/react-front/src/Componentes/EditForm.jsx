import React, { useState } from "react";

const EditForm = ({ movie, genres, onSubmit, onCancel }) => {
  const [editedMovie, setEditedMovie] = useState({ ...movie });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedMovie(prevState => ({ ...prevState, [name]: value }));
  };

  const handleGenresChange = (e) => {
    const { options } = e.target;
    const selectedGenres = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedGenres.push(parseInt(options[i].value));
      }
    }
    setEditedMovie(prevState => ({ ...prevState, genres: selectedGenres }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedMovie);
  };

  return (
    <div className="edit-form">
      <h2>Editar Película</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={editedMovie.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            name="description"
            value={editedMovie.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={editedMovie.rating}
            onChange={handleInputChange}
            min="1"
            max="5"
          />
        </label>
        <label>
          Géneros:
          <select
            multiple
            name="genres"
            value={editedMovie.genres}
            onChange={handleGenresChange}
          >
            {genres.map(genre => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Guardar Cambios</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export {EditForm};