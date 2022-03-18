import classes from './ButtonBiggerVertical.module.css';

const ButtonBiggerVertical: React.FC<{onClick: () => void}> = (props) => {
  return <div className={classes.ButtonBiggerVertical} id='equals' onClick={props.onClick}>=</div>;
};

export default ButtonBiggerVertical;
