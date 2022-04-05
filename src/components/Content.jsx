import React, { useEffect, useState } from 'react';
import InfoBlock from './InfoBlock';
import { useFetching } from '../hooks/useFetching';
import UserService from '../API/UserService';
import Users from './Users';
import { useUsers } from '../hooks/useSearchedUsers';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import FilterUsers from './FilterUsers';

function Content() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const searchedUsers = useUsers(users, filter);

  const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
    const response = await UserService.getAll();
    setUsers([...users, ...response.data]);
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container sx={{ py: 5 }} maxWidth="md">
      <InfoBlock />
      <FilterUsers filter={filter} setFilter={setFilter} />

      {isUsersLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
          <CircularProgress />
        </Box>
      )}

      {!usersError && <Users users={searchedUsers} />}
    </Container>
  );
}

export default Content;
