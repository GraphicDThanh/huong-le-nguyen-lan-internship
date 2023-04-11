import { useEffect, useState } from 'react';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return [users, isLoading, error];
};

const useSearchUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const { users } = useFetchUsers();

  useEffect(() => {
    const filtered = users.filter((user) => user.name.includes(searchTerm));
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return {
    searchTerm,
    setSearchTerm,
    filteredUsers,
  };
};

export { useSearchUsers, useFetchUsers };
