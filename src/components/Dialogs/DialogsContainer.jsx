import React from "react";
import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator } from "./../../redux/dialogs-reducer";
import { addMessageActionCreator } from "./../../redux/dialogs-reducer";


const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageTextActionCreator(body));
  };

  return (
    <Dialogs updateNewMessageBody={onMessageChange} sendMessage={addMessage} dialogsPage={state} />
  );
};
export default DialogsContainer;
