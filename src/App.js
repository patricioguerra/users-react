import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const userHandle = (userName, userAge) =>{
    setUsersList((prevUsersList)=>{
      return[...prevUsersList, {id: Math.random().toString(), name: userName, age: userAge}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={userHandle}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
