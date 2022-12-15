import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

/* Аля БД на серваке ( РЕДАКС) */
let dialogsData = [                /* БД диалогов */
  {id : 1, name: "Alexey"},
  {id : 2, name: "Daniil"},
  {id : 3, name: "Leonid"},
  {id : 4, name: "Masha"},
  {id : 5, name: "Arina"},
  {id : 6, name: "Aleksandr"}
]

let messagesData = [                /* БД сообщений*/
  {id : 1, message: "Hi!!!"},
  {id : 2, message: "How are you?"},
  {id : 3, message: "Yo ! =)"},
  {id : 4, message: "Yo ! =)"},
  {id : 5, message: "Yo ! =))"},
  {id : 6, message: "Yo !!! =)"}
]

/* Компонента отрисовки всего блока ДИАЛОГОВ  */
const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
      </div>
    </div>
  );
};
export default Dialogs;
