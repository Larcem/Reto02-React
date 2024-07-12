import axios from 'axios'

export const  getAllmovies = () =>{
    return axios.get("http://127.0.0.1:8000/api/movies/")
}
export const getAllgenres = () => {
    return axios.get("http://127.0.0.1:8000/api/genres/");
  };