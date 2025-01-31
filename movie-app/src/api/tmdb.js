import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
console.log("API Key:", API_KEY);  // This should log the actual API Key

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async () => {
  try {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    console.log("Request URL:", url);  // Log the request URL
    const response = await axios.get(url);
    console.log(response.data.results);  // Log the movie data
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};


