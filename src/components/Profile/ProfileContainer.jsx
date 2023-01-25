import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, userProfileTHUNK } from "./../../redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";

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
    if (!this.props.isAuth ) return <Navigate to="/login"/>
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth : state.auth.isAuth
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, userProfileTHUNK })(
  WithUrlDataContainerComponent
);
