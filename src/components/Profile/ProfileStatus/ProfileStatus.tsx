import React, { ChangeEvent } from "react";

type ProfileStatusType = {
  status: string;
  updateStatus: (status: string) => void;
  isToUpdate: boolean;
};

export class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    if (this.props.isToUpdate) {
      this.setState({ editMode: true });
    }
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    let { status } = this.props;
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              <b>Status: </b>
              {status}
            </span>
          </div>
        ) : (
          <div>
            <b>Status: </b>
            <input
              onChange={this.onStatusChange}
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
            />
          </div>
        )}
      </div>
    );
  }
}
