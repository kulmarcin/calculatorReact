import { MouseEvent } from 'react';
import classes from './Button.module.css';

const Button: React.FC<{ inner: string , onClick: (e:MouseEvent) => void}> = props => {
  return <div className={classes.Button} id={props.inner} onClick={props.onClick}>{props.inner}</div>;
};

export default Button;
