import styled from "styled-components";
const Label = styled.label`
  border: 1px solid grey;
  display: block;
  padding: 2px 5px;
  margin: 3px;
`;

const User = (props) => {
  const username = props.username;
  const age = props.age;

  return (
    <Label>
      {username} ({age} years old)
    </Label>
  );
};

export default User;
