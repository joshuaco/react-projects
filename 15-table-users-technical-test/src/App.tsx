import { useEffect, useMemo, useRef, useState } from 'react';
import { SortBy, User } from './types.d';
import UsersTable from './components/UsersTable';
import './App.css';

const fetchData = async (currentPage: number) => {
  const response = await fetch(
    `https://randomuser.me/api/?page=${currentPage}&results=5&seed=foobar`
  );
  if (!response.ok) throw new Error('Failed to fetch data');
  const data = await response.json();
  return data.results;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [showColors, setShowColors] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.None);
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const usersRef = useRef<User[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchData(currentPage)
      .then((data) => {
        setUsers((prevUsers) => prevUsers.concat(data));
        usersRef.current = usersRef.current.concat(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const toggleSortingBy = (sortBy: SortBy) => {
    const sortValue = sortBy === sorting ? SortBy.None : sortBy;
    setSorting(sortValue);
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter((user) => user.login.uuid !== id));
  };

  const restoreInitialState = () => {
    setUsers(usersRef.current);
  };

  const filteredUsers = useMemo(() => {
    return typeof filterValue === 'string' && filterValue.length > 0
      ? users.filter((user) => {
          return user.location.country
            .toLowerCase()
            .includes(filterValue.toLowerCase());
        })
      : users;
  }, [filterValue, users]);

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.None) return filteredUsers;
    if (sorting === SortBy.Country)
      return [...filteredUsers].sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      );
    if (sorting === SortBy.Name)
      return [...filteredUsers].sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      );
    if (sorting === SortBy.LastName)
      return [...filteredUsers].sort((a, b) =>
        a.name.last.localeCompare(b.name.last)
      );

    return filteredUsers;
  }, [filteredUsers, sorting]);

  const toNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h1>Technical Test</h1>
        <nav style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button onClick={toggleColors}>Colorize rows</button>
          <button onClick={() => toggleSortingBy(SortBy.Country)}>
            {sorting === SortBy.Country
              ? 'Unsort by country'
              : 'Sort by country'}
          </button>
          <button onClick={restoreInitialState}>Restore initial state</button>
          <input
            type='text'
            value={filterValue || ''}
            onChange={(e) => setFilterValue(e.target.value)}
            placeholder='Filter by country'
            style={{ borderRadius: '8px', border: 'none' }}
          />
        </nav>
      </header>

      {filteredUsers.length > 0 && (
        <UsersTable
          users={sortedUsers}
          toggleSortingBy={toggleSortingBy}
          deleteUser={deleteUser}
          showColors={showColors}
        />
      )}

      {loading && <div>Loading...</div>}

      {!loading && error && <p>{error}</p>}

      {!loading && !error && filteredUsers.length === 0 && (
        <p>No users found</p>
      )}

      {!loading && !error && <button onClick={toNextPage}>Show more</button>}
    </div>
  );
}

export default App;
