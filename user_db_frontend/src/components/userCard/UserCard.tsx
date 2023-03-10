import Styles from './UserCard.module.css';

const UserCard = ({ user }: any) => {
  return (
    <div className={Styles.card}>
      <h2>{user.name}</h2>
      <button>Details</button>
    </div>
  );
};

export default UserCard;
