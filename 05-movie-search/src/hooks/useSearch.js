import { useRef } from 'react';
import { useState, useEffect } from 'react';

export function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  // Evita que se ejecute el primer renderizado
  const isFirstInput = useRef(true);

  useEffect(() => {
    // Avoid to print error of 'empty field' on first render
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }
    if (search === '') {
      setError("The input can't be empty");
      return;
    }
    setError('');
  }, [search]);

  return { search, setSearch, error };
}
