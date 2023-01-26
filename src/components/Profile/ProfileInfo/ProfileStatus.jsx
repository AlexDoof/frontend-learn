import React from "react";
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    title: "YO!"
  }

  activateEditMode() {

    this.setState({
      editMode: true
    })
  }

  deactivateEditMode() {

    this.setState({
      editMode: false
    })
  }

  render() {
    return <div>
      {!this.state.editMode &&
        <div className={classes.statusText}>
          <span onClick={this.activateEditMode.bind(this)}> {this.props.status} </span>
        </div>
      }
      {this.state.editMode &&
        <div>
          <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} className={classes.statusInput} />
        </div>
      }
    </div>
  };
};
export default ProfileStatus;
