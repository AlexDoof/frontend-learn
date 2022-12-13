import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

/* Компонента отдельного диалога */
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

/* Компонента отдельного ТЕКСТА диалога */
const Message = (props) => {
  return (
  <div className={classes.message}>{props.message}</div>
  );
};

/* Компонента отрисовки всего блока ДИАЛОГОВ  */
const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Alexey" id="1" />
        <DialogItem name="Daniil" id="2" />
        <DialogItem name="Leonid" id="3" />
        <DialogItem name="Masha" id="4" />
        <DialogItem name="Arina" id="5" />
        <DialogItem name="Aleksandr" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi!!!"/>
        <Message message="How are you?"/>
        <Message message="Yo ! =)"/>
        <Message message="Yo ! =)"/>
        <Message message="Yo ! =)"/>
      </div>
    </div>
  );
};
export default Dialogs;
