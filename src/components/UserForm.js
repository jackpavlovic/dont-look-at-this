import { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styled from "styled-components";
import ModalError from "./UI/ModalError";

const ContentDiv = styled.div`
  text-align: left;
  flex-wrap: wrap;
  display: flex;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  & input {
    display: block;
    width: 100%;
    border: 1px solid black;
    background: transparent;
    font: inherit;
    margin-bottom: 0.2rem;
  }
  & input:focus {
    font: inherit;
    outline: none;
    background: beige;
    border-color: black;
  }
`;

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const discardErrorHandler = () => {
    setError();
  }
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      })
    } else if (+enteredAge <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)"
      })
    } else {
      const user = {
        username: enteredUsername,
        age: +enteredAge,
        id: Math.random().toString(),
      };
      console.log(user);
      props.onAddUser(user);
    }
    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
    <div>
      
      {error && <ModalError title={error.title} message={error.message} onDiscardError={discardErrorHandler}/>}
      <Card>
        <form onSubmit={submitHandler}>
          <ContentDiv>
            <label>Username</label>
            <input
              type="text"
              onChange={usernameChangeHandler}
              value={enteredUsername}
            />
          </ContentDiv>
          <ContentDiv>
            <label>Age(Years)</label>
            <input
              type="number"
              onChange={ageChangeHandler}
              value={enteredAge}
            />
          </ContentDiv>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
