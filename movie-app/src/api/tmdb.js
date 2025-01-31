import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
console.log("API Key:", API_KEY);  // Add this line to check the API key

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    console.log(response.data.results);  // Add this line to log the movie data
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

