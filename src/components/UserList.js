import Card from "./UI/Card";
import styled from "styled-components";

const Label = styled.label`
  border: 1px solid grey; 
  display: block;
  padding: 2px 5px;
  margin: 3px;
`

const UserList = () => {
  
  return (
    <Card>
      <Label>Jack 30 years old</Label>
    </Card>
  )
  
}

export default UserList;