import axios from 'axios'

export const  getAllmovies = () =>{
    return axios.get("http://127.0.0.1:8000/api/movies/")
}
export const getAllgenres = () => {
    return axios.get("http://127.0.0.1:8000/api/genres/");
  };
export const deleteMovies = (id) =>{
    return axios.delete("http://127.0.0.1:8000/api/movies/"+`${id}`);
}
export const addMovie=(movie)=>{
    return axios.post("http://127.0.0.1:8000/api/movies/", movie);
}
export const addGenres=(gener)=>{
    return axios.post("http://127.0.0.1:8000/api/genres/", gener);
}