import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import  {authTHUNK} from './../../redux/auth-reducer';
class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authTHUNK();
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {authTHUNK})(HeaderContainer);