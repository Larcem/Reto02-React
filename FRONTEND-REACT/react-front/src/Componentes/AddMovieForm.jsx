import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addMovie } from '../api/api';
import { addGenres } from '../api/api';
import "./AddMovieForm.css";

const AddMovieForm = () => {
    const { register, handleSubmit } = useForm()
    

    const onSubmit = handleSubmit(async data => {
        console.log(data);
        if (data.title && data.description && data.rating && data.image) {
            await addMovie(data); // Llama a la función para agregar la película
        }

        // Enviar géneros seleccionados
        if (data.opciones && data.opciones.length > 0) {
            console.log('Géneros seleccionados:', data.opciones); // Aquí data.opciones contendrá los géneros seleccionados
            await addGenres(data.opciones); // Llama a la función para agregar los géneros
        }
    });

    return (
        <form onSubmit={onSubmit} >
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    placeholder='Titulo'
                    {...register("title", { required: true })}
                />
            </div>
            <div>
                <label>Descripción:</label>
                <input
                    type="text"
                    placeholder='Descripcion'
                    {...register("description", { required: true })}
                />
            </div>
            <div>
                <label>Rating:</label>
                <input
                    type="number"
                    {...register("rating", { required: true })}
                />
            </div>
            <div>
                    <label>Imagen URL:</label>
                    <input
                        type="text"
                        placeholder='Url image'
                        {...register("image", { required: true })}
                    />
            </div>
            <div>
                <label>Géneros </label>
                <select id="opciones" name="opciones" multiple {...register("opciones")}>
                    <option value="1">Drama</option>
                    <option value="2">Accion</option>
                    <option value="3">Crimen</option>
                </select>
            </div>
            <button type="submit">Agregar Película</button>
        </form>
    );
};

export default AddMovieForm;