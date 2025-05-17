import { useMemo, useState } from 'react';
import { useUsers } from './hook/useUsers';
import { SortBy } from './types.d';
import UsersTable from './components/UsersTable';
import './App.css';

function App() {
  const { users, isLoading, isError, fetchNextPage, refetch, hasNextPage } =
    useUsers();

  const [showColors, setShowColors] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.None);
  const [filterValue, setFilterValue] = useState<string | null>(null);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const toggleSortingBy = (sortBy: SortBy) => {
    const sortValue = sortBy === sorting ? SortBy.None : sortBy;
    setSorting(sortValue);
  };

  const restoreInitialState = () => {
    refetch();
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
    fetchNextPage();
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
          showColors={showColors}
        />
      )}

      {isLoading && <strong>Loading...</strong>}

      {!isLoading && isError && <p>{isError}</p>}

      {!isLoading && !isError && filteredUsers.length === 0 && (
        <p>No users found</p>
      )}

      {!isLoading && !isError && hasNextPage && (
        <button onClick={toNextPage}>Show more</button>
      )}

      {!isLoading && !isError && !hasNextPage && <p>No more users</p>}
    </div>
  );
}

export default App;
