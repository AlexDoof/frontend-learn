import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


/* Компонента отрисовки всего блока ДИАЛОГОВ  */
const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} />
  ));
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div className={classes.messages}>{messagesElements}</div>

      <textarea
        ref={newMessageElement}
        onChange={onMessageChange}
        value={state.newMessageText}
      />

      <button onClick={addMessage}>
        Отправить сообщение
      </button>
    </div>
  );
};
export default Dialogs;
