import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList = props =>{
  return(
    <Card classesAdded={classes.users}>
      <ul>
        {props.users.map(user => <li key={user.id}>{user.name} ({user.age} yo)</li>)}
      </ul>
    </Card>
  );

};

export default UsersList;