import { useState, useMemo } from 'react';
import { useSearch } from './hooks/useSearch';
import { useMovies } from './hooks/useMovies';
import debounce from 'just-debounce-it';
import Movies from './components/Movies';
import './App.css';

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(' ')) return;
    setSearch(newSearch);
    getDebouncedMovies(newSearch);
  };

  // I don't use useCallback because linter warning
  const getDebouncedMovies = useMemo(
    () =>
      debounce((search) => {
        getMovies({ search });
      }, 300),
    [getMovies]
  );

  return (
    <div className="app">
      <header>
        <h1>Movie Search</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              name="query"
              id="query"
              placeholder="Avengers, Rocky IV..."
              style={{
                border: `1px solid ${error ? 'red' : 'transparent'}`
              }}
              value={search}
              onChange={handleChange}
            />
            <button className="submit-button" type="submit">
              Search
            </button>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleSort}
              checked={sort}
              id="sort"
            />
            <label htmlFor="sort">Sort by Title</label>
          </div>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
