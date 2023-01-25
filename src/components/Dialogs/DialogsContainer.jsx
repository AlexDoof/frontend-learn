//import React from "react";
import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator } from "./../../redux/dialogs-reducer";
import { addMessageActionCreator } from "./../../redux/dialogs-reducer";
import {connect} from 'react-redux';

//-------------------------R-R-------------------------


let mapStateToProps = (state) => {
  return {
    dialogsPage : state.dialogsPage,
    isAuth : state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },

    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
export default DialogsContainer;
