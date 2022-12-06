import { useState } from "react";
import Card from "./UI/Card";
import styled from 'styled-components'

const ContentDiv = styled.div`
  text-align: left;

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
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default User;
