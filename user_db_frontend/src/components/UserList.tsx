import { Grid } from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from '../App';
import UserCard from './UserCard';

const UserList = () => {
  const { userData } = useContext<any>(UserContext);


  return (
    <Grid m={10} p={5} gap={10} templateColumns={'repeat(2, 1fr)'}>
      {userData.users.map((user: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Grid>
  );
};

export default UserList;
