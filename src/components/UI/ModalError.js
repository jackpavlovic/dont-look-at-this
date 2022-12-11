import Card from "./Card";
import Button from "./Button";

import classes from "./ModalError.module.css";
const ModalError = (props) => {

  return (
    <div className={classes.backdrop} onClick={props.onDiscardError}>
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onDiscardError}>Okay</Button>
      </footer>
    </Card>
    </div>
  );
};
export default ModalError;
