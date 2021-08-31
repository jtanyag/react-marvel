import {
  API_URL,
  API_KEY,
  BASE_URL
} from './config';

const apiSettings = {
  fetchCharacters: async (searchTerm) => {
    const endpoint = searchTerm
      ? `${BASE_URL}&nameStartsWith=${searchTerm}`
      : `${BASE_URL}`;
      return await (await fetch(endpoint)).json();
  }
};

export default apiSettings;