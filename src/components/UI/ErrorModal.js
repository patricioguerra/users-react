
import Card from "./Card";
import Button from "./Button";

import classes from './Error.module.css';

const ErrorModal = props => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card classesAdded={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.action}>
          <Button onClick={props.onButtonClick}>Close</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;