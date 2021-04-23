import UserItem from "../UserItem/UserItem";
import classes from "./UserList.module.css";
import Card from "../../UI/Card/Card";

const UserList = (props) => {
  return (
    <>
      <h2>User List</h2>
      <Card>
        <ul className={classes.users}>
          {props.users.map((user) => (
            <UserItem key={user.id} id={user.id} onDelete={props.onDeleteItem}>
              {user.name + " (" + user.age + " years old)"}
            </UserItem>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UserList;
