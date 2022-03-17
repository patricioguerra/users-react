import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from './AddUser.module.css';


const AddUser = (props) => {

  const [inputText, setInputText] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [errorInput, setErrorInput] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    //validations
    if (inputText.trim().length === 0 || inputNumber.trim().length === 0){
      setErrorInput({
        title: 'Empty',
        content: 'No empty values'
      });
      return;
    };
    if (+inputNumber < 1){
      setErrorInput({
        title: 'Wrong age',
        content: 'Age cant be less to 1'
      });
      return;
    };

    //lifting state to app
    props.onAddUser(inputText, inputNumber);
    //reset
    setInputNumber('');
    setInputText('');
  };

  const usernameHandler = (event) => {
    setInputText(event.target.value);
  }

  const ageHandler = (event) => {
    setInputNumber(event.target.value);
  }

  const errorHandler = () => {
    setErrorInput(null);
  }
  return (
    <div>
      {errorInput && <ErrorModal title={errorInput.title} content={errorInput.content} onButtonClick={errorHandler} />}
      <Card classesAdded={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={inputText} onChange={usernameHandler} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" value={inputNumber} onChange={ageHandler} />
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
