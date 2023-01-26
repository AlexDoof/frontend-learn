//import React from "react";
import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator } from "./../../redux/dialogs-reducer";
import { addMessageActionCreator } from "./../../redux/dialogs-reducer";
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

//-------------------------R-R-------------------------


let mapStateToProps = (state) => {
  return {
    dialogsPage : state.dialogsPage
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
