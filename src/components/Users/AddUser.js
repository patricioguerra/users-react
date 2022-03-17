import { useState } from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card classesAdded="">
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" />
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};

export default AddUser;
