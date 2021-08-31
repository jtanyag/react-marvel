import { useState, useEffect } from 'react';
import API from '../API';

const initialState = {
  results: [],
  total_results: 0
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCharacters = async (searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const results = await API.fetchCharacters(searchTerm);
      const characters =  await results.data.results;

      setState(prev => ({
        ...characters,
        results: [...characters] 
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return { state, loading, error };
}