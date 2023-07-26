import axios from 'axios';

// base da url: https://api.themoviedb.org/3/
//URL da API: https://api.themoviedb.org/3/movie/550?api_key=c84ed123259752ffa09302fe509affef

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;