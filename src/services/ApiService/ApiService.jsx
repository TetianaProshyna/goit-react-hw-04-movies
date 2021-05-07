import axios from "axios";

export default class ApiService {
  getTradingMovies() {
    return axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=a40b5c2c6387e2045112aac661cf66e7"
      )
      .then((response) => response.data.results);
  }

  getMoviesOnSearch(query) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=a40b5c2c6387e2045112aac661cf66e7&query=${query}`
      )
      .then((response) => response.data.results);
  }
  getMovieById(movieId) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=a40b5c2c6387e2045112aac661cf66e7`
      )
      .then((response) => response.data);
  }
  getMovieCredits(movieId) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a40b5c2c6387e2045112aac661cf66e7`
      )
      .then((response) => response.data.cast);
  }
  getMovieReviews(movieId) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a40b5c2c6387e2045112aac661cf66e7`
      )
      .then((response) => response.data.results);
  }
}
