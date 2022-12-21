import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

/* Компонента отрисовки всего блока ДИАЛОГОВ  */
const Dialogs = (props) => {

  /* МАПИМ массив dialogsData в массив JSX тегов  */
  let dialogElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} />
  ));
  let newMessageElement = React.createRef();
  
  /* ф-я добавления нового сообщения*/
  let  addMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div className={classes.messages}>{messagesElements}</div>

      <textarea 
      ref={newMessageElement}
      onChange={onMessageChange}
      value = {props.dialogsPage.newMessageText}
      />

      <button  onClick={addMessage}>
        Отправить сообщение
      </button>  
    </div>
  );
};
export default Dialogs;
