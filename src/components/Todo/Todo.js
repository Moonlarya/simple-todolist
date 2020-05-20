import React, { Component } from "react";
import "./style.scss";

class Todo extends Component {
  state = {
    isEdit: false,
    task: "",
  };
  onEdit = (event) => {
    if (this.state.task) {
      this.props.editTask({ task: this.state.task });
      event.stopPropagation();
      this.toggleEdit();
    } else {
      console.error("Your input is empty");
    }
  };
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ task: event.target.value });
  };
  toggleEdit = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };
  onDelete = (event) => {
    this.props.deleteTask();
    event.stopPropagation();
  };
  render() {
    const { complete, task } = this.props.value;
    const { isEdit } = this.state;
    return (
      <div>
        {!isEdit && (
          <li
            onClick={this.props.toggleComplete}
            className={`flex_container todo text ${complete ? "complete" : ""}`}
          >
            <span className={`${complete ? "text-stroke" : ""}`}>{task}</span>
            <div className="flex_container control">
              <button onClick={this.toggleEdit} className="primary_btn">
                Edit
              </button>
              <button onClick={this.onDelete} className="delete_btn">
                ×
              </button>
            </div>
          </li>
        )}
        {isEdit && (
          <li
            onClick={this.props.toggleComplete}
            className={`flex_container todo text ${complete ? "complete" : ""}`}
          >
            <input defaultValue={task} onChange={this.handleChange} />
            <div className="flex_container control">
              <button onClick={this.onEdit} className="primary_btn">
                Save
              </button>
              <button onClick={this.toggleEdit} className="primary_btn">
                Cancel
              </button>
            </div>
          </li>
        )}
      </div>
    );
  }
}

export default Todo;
