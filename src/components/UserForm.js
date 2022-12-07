import { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styled from 'styled-components'

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

`

const User = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
    const user = {
      username: enteredUsername,
      age: +enteredAge,
    };

    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
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
          <input type="number" onChange={ageChangeHandler} value={enteredAge} />
        </ContentDiv>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default User;
