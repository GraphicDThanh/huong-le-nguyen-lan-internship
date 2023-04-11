import { useSearchUsers } from './hooks';

const Users = () => {
  const { searchTerm, setSearchTerm, filteredUsers } = useSearchUsers();

  return (
    <div>
      <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
