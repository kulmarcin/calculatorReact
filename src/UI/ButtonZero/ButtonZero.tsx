import { MouseEvent } from 'react';
import classes from './ButtonZero.module.css';

const ButtonZero: React.FC<{onClick: (e: MouseEvent) => void}> = (props) => {
  return <div className={classes.ButtonZero} id='0' onClick={props.onClick}>0</div>;
};

export default ButtonZero;
