import { MouseEvent } from 'react';
import classes from './ButtonTool.module.css';

const ButtonTool: React.FC<{ inner: string, onClick: (e: MouseEvent) => void }> = props => {
  return <div className={classes.ButtonTool} id={props.inner} onClick={props.onClick}>{props.inner}</div>;
};

export default ButtonTool;
