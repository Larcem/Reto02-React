import React, { useState } from "react";
import "./Insertar.css";
import AddMovieForm from "./AddMovieForm";

function Insertar() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="Insertar__general">
        <button className="Insetar__Agregar" onClick={handleButtonClick}> 
            {showForm ? "Ocultar Formulario" : "Agregar"}
        </button>
        {showForm && <AddMovieForm />}
    </div>
  );
}

export { Insertar };
