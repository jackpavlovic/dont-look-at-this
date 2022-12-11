import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
function App() {
  const [users, setUsers] = useState([])
  

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers]
    })
  }

  return (
    <div>
    <UserForm onAddUser={addUserHandler}/>
    <UserList usersArray={users}/>
    </div>
  );
}

export default App;
