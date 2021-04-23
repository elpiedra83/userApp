import React, { useState } from "react";

import UserList from "./components/Users/UserList/UserList";
import UserInput from "./components/Users/AddUser/AddUser";
import "./App.css";

const App = () => {
  const [userList, setUserList] = useState([
    { name: "Ignacio", age: 38, id: "u1" },
    { name: "Stefani", age: 30, id: "u2" },
  ]);

  const addUserHandler = (enteredText, enteredAge) => {
    setUserList((prevUser) => {
      const updatedUser = [...prevUser];
      updatedUser.unshift({
        name: enteredText,
        age: enteredAge,
        id: Math.random().toString(),
      });
      return updatedUser;
    });
  };

  const deleteItemHandler = (userId) => {
    setUserList((prevUser) => {
      const updatedUser = prevUser.filter((user) => user.id !== userId);
      return updatedUser;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  );

  if (userList.length > 0) {
    content = <UserList users={userList} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <>
      <section id="user-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="users">{content}</section>
    </>
  );
};

export default App;
