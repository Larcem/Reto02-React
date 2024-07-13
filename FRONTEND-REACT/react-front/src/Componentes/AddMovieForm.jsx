import React, { useState } from 'react';
import axios from 'axios';
import "./AddMovieForm.css";

const AddMovieForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');
    const [genres, setGenres] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const movie = { name, description, rating, image, genres: genres.split(',').map(g => g.trim()) };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/movies/', movie);
            console.log(response.data);
            // Manejar la respuesta exitosa (limpiar formulario, mostrar mensaje, etc.)
        } catch (error) {
            console.error(error);
            // Manejar errores
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Descripción:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Rating:</label>
                <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
            </div>
            <div>
                <label>Imagen URL:</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div>
                <label>Géneros (separados por comas):</label>
                <input
                    type="text"
                    value={genres}
                    onChange={(e) => setGenres(e.target.value)}
                />
            </div>
            <button type="submit">Agregar Película</button>
        </form>
    );
};

export default AddMovieForm;
