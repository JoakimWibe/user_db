import UserCard from '../userCard/UserCard';
import Styles from './UserList.module.css';

const UserList = ({ users }: any) => {
  return (
    <div className={Styles.userList}>
      {users.map((user: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
