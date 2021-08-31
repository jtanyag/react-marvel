const API_URL = 'https://gateway.marvel.com/v1/public/';
const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = `${API_URL}characters?apikey=${API_KEY}&limit=3`;

export {
  API_URL,
  API_KEY,
  BASE_URL
};