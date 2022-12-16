import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

/*------------------------------------------------------------ АЛЯ данные с сервака -----------------*/
/* Аля БД на серваке ( РЕДАКС) */
let dialogs = [
  /* БД диалогов */ { id: 1, name: "Alexey" },
  { id: 2, name: "Daniil" },
  { id: 3, name: "Leonid" },
  { id: 4, name: "Masha" },
  { id: 5, name: "Arina" },
  { id: 6, name: "Aleksandr" },
];

let messages = [
  /* БД сообщений*/ { id: 1, message: "Hi!!!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Yo ! =)" },
  { id: 4, message: "Yo ! =)" },
  { id: 5, message: "Yo ! =))" },
  { id: 6, message: "Yo !!! =)" },
];

/*------------------------------------------------------------ АЛЯ данные с сервака -----------------*/

/* МАПИМ массив dialogsData в массив JSX тегов  */
let dialogElements = dialogs.map((dialog) => (
  <DialogItem name={dialog.name} id={dialog.id} />
));

let messagesElements = messages.map((message) => (
  <Message message={message.message} />
));

/* Компонента отрисовки всего блока ДИАЛОГОВ  */
const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
