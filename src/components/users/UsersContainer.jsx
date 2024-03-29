import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  changePage
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "./../common/Preloader/Preloader.js";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage , this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.changePage(pageNumber, this.props.pageSize)
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        followingInProgress={this.props.followingInProgress}
      />
    </>
      ;
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth : state.auth.isAuth
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    changePage})

)(UsersContainer)