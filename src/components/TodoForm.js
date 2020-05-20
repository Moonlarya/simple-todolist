import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    task: "",
  };
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodos({ task: this.state.task });
    this.setState({ task: "" });
  };
  render() {
    const { task } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="flex_container">
        <input
          name="task"
          value={task}
          placeholder="What to do?"
          onChange={this.handleChange}
        />
        <button className="primary_btn" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
