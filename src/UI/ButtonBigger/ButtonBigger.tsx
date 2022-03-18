import classes from './ButtonBigger.module.css';

const ButtonBigger: React.FC<{onClick: () => void}>= (props) => {
  return <div className={classes.ButtonBigger} id='ac' onClick={props.onClick}>AC</div>;
};

export default ButtonBigger;
