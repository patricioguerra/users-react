import classes from './Button.module.css';

const Button = props => {
  const classesFinal = classes.button + ' '+ props.classesAdded;

  return (
    <button 
    className={classesFinal} 
    type={props.type || 'button'} 
    onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;