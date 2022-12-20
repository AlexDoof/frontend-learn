import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

/* Компонента отрисовки всего блока ДИАЛОГОВ  */
const Dialogs = (props) => {

  /* МАПИМ массив dialogsData в массив JSX тегов  */
  let dialogElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessage = React.createRef() ;
  let sendMessage = () => {
    alert(newMessage.current.value)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <textarea ref={newMessage}></textarea>
      <button onClick={sendMessage}>Отправить сообщение</button>  
    </div>
  );
};
export default Dialogs;
