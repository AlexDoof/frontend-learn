import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, userProfileTHUNK } from "./../../redux/profile-reducer";
import {  useParams } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

//---------------------------------------------------------------
const withRouter = (Children) => {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
};
//************************************************************** */

class ProfileContainer extends React.Component {
  redirectToMainUser() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 27435; //Пишем Ваш id
    }
    this.props.userProfileTHUNK(userId);
  }

  componentDidMount() {
    this.redirectToMainUser();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isMain !== prevProps.isMain) {
      if (this.props.isMain) {
        this.redirectToMainUser();
      }
    }
  }

  render() {
    
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default compose(
  connect(mapStateToProps, { setUserProfile, userProfileTHUNK }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)



