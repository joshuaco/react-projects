import { useMutation } from '@tanstack/react-query';
import { SortBy, User } from '../types.d';
import { deleteUser } from '../services/users';

interface UsersTableProps {
  users: User[];
  toggleSortingBy: (sortBy: SortBy) => void;
  showColors: boolean;
}

function UsersTable({ users, toggleSortingBy, showColors }: UsersTableProps) {
  const mutation = useMutation({
    mutationFn: deleteUser
  });

  const handleDeleteUser = (id: string) => {
    mutation.mutate(id);
  };

  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Picture</th>
          <th
            className='select-filter'
            onClick={() => toggleSortingBy(SortBy.Name)}
          >
            Name
          </th>
          <th
            className='select-filter'
            onClick={() => toggleSortingBy(SortBy.LastName)}
          >
            LastName
          </th>
          <th
            className='select-filter'
            onClick={() => toggleSortingBy(SortBy.Country)}
          >
            Country
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            key={user.login.uuid}
            className={showColors ? 'table-colors' : ''}
          >
            <td>
              <img
                src={user.picture.thumbnail}
                alt={`picture of ${user.name.first}`}
              />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <button onClick={() => handleDeleteUser(user.login.uuid)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
