import React, { Component } from "react";
import "./style.scss";

class Todo extends Component {
  onDelete = (event) => {
    this.props.deleteTask();
    event.stopPropagation();
  };
  render() {
    const { complete, task } = this.props.value;
    return (
      <li
        onClick={this.props.toggleComplete}
        className={`flex_container todo text ${complete ? "complete" : ""}`}
      >
        <span className={`${complete ? "text-stroke" : ""}`}>{task}</span>
        <div className="flex_container control">
          <button onClick={this.props.deleteTask} className="primary_btn">
            Edit
          </button>
          <button onClick={this.onDelete} className="delete_btn">
            ×
          </button>
        </div>
      </li>
    );
  }
}

export default Todo;
