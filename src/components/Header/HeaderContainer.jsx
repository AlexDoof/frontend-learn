import axios from "axios";
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {setAuthUserData} from './../../redux/auth-reducer'
import {toggleIsFetching} from "./../../redux/auth-reducer";
import Preloader from "./../common/Preloader/Preloader.js";

class HeaderContainer extends React.Component {

  componentDidMount () {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
      .then((response) => {
        this.props.toggleIsFetching(false);
        if ( response.data.resultCode === 0 ) {
          let {id, login, email} = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    
    return <>{this.props.isFetching ? <Preloader /> : null}
      <Header {...this.props} />
      </>
  }
}

const mapStateToProps = (state) => ({
  
  isAuth:state.auth.isAuth,
  login:state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching} ) (HeaderContainer);