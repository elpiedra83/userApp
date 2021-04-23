import { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import classes from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [userNameIsValid, setUserNameIsValid] = useState(true);
  const [ageIsValid, setAgeIsValid] = useState(true);

  const userNameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setUserNameIsValid(true);
    }
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setAgeIsValid(true);
    }
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setUserNameIsValid(false);
      setAgeIsValid(false);
      return;
    }
    onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            min="0"
            placeholder="Years"
            value={age}
            onChange={ageChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
