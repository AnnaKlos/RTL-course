import "./App.css";
import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);

    
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
    </div>
  );
}

export default App;
