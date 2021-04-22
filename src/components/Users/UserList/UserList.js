import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <>
      <h2>User List</h2>
      <ul className={styles["user-list"]}>
        {props.items.map((user) => (
          <UserItem key={user.id} id={user.id} onDelete={props.onDeleteItem}>
            {user.name + " (" + user.age + " years old)"}
          </UserItem>
        ))}
      </ul>
    </>
  );
};

export default UserList;
