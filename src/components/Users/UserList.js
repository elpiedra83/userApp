import UserItem from "./UserItem";
import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <h2>User List</h2>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id} id={user.id} onDelete={props.onDeleteItem}>
            {user.name + " (" + user.age + " years old)"}
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
