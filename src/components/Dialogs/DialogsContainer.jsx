import React from "react";
import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator } from "./../../redux/dialogs-reducer";
import { addMessageActionCreator } from "./../../redux/dialogs-reducer";
import {connect} from 'react-redux';

//-------------------------R-R-------------------------


let mapStateToProps = (state) => {
  return {
    dialogsPage:state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(addMessageActionCreator());
    },

    sendMessage: (body) => {
      dispatch(updateNewMessageTextActionCreator(body));
    }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
export default DialogsContainer;
