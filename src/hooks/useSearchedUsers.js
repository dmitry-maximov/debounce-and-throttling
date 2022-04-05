import { useMemo } from 'react';

export const useUsers = (users, query) => {
  const searchedUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, users]);

  return searchedUsers;
};
