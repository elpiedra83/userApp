import { useState } from "react";
import styles from "./UserInput.module.css";
import Button from "../../UI/Button/Button";

const UserInput = ({ onAddUser }) => {
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

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setUserNameIsValid(false);
      setAgeIsValid(false);
      return;
    }
    onAddUser(userName, age);
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className={styles["form-control"]}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={userNameChangeHandler} />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="age" placeholder="Years">
            Age (Years)
          </label>
          <input id="age" type="number" min="0" onChange={ageChangeHandler} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </>
  );
};

export default UserInput;
