import { useState, useRef } from 'react';
import { searchMovies } from '../services/movies';
import { useMemo } from 'react';
import { useCallback } from 'react';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    // Avoid a new search if the search value is same
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError('');
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    if (sort && movies) {
      return [...movies].sort((a, b) => a.title.localeCompare(b.title));
    }
    return movies;
  }, [movies, sort]);

  return { movies: sortedMovies, error, loading, getMovies };
}
