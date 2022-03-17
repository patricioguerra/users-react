//Shell component
import classes from './Card.module.css';

const Card = (props) => {
  const classesFinal = classes.card +' '+ props.classesAdded;
  return <div className={classesFinal}>{props.children}</div>
}

export default Card;