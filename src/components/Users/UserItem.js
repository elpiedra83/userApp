import styles from "./UserItem.module.css";

const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles["user-item"]} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default UserItem;
