import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
 
/* Компонента отрисовки всего блока ДИАЛОГОВ  */
const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id}/>
  ));
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageBody(text);
  };

  if (!props.isAuth) return <Navigate to={"/login"}/>

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div className={classes.messages}>{messagesElements}</div>

      <textarea
        ref={newMessageElement}
        onChange={onMessageChange}
        value={state.newMessageText}
      />

      <button onClick={addMessage} className ={classes.dialogs_btn}>
        Отправить сообщение
      </button>
    </div>
  );
};
export default Dialogs;
