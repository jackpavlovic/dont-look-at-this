import Card from "./UI/Card";
import User from "./User";

const UserList = (props) => {
  if (props.usersArray.length === 0) {
    return;
  }

  return (
    <Card>
      {props.usersArray.map((user) => (
        <User username={user.username} age={user.age} key={user.id} />
      ))}
    </Card>
  );
};

export default UserList;
