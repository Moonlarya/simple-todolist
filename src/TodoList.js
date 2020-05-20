import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo/Todo";
import "./style/style.css";

class TodoList extends Component {
  state = {
    todos: [],
  };
  addTodos = (todo) => {
    const task = { ...todo, complete: false };
    this.setState({ todos: [...this.state.todos, task] });
  };
  toggleComplete = (id) => {
    /*1) Дістати потрібний елемент за індексом
      2) Зробити в цьому елементі необхідні зміни
      3) Вставити цей елмент назад в масив на те саме місце  (по існуючому індексу)
      4) вставити масив в стейт */
    const element = this.state.todos[id];
    element.complete = !element.complete;
    const arr = [...this.state.todos];
    arr[id] = element;
    this.setState({ todos: arr });
  };
  deleteTask = (id) => {
    let arr = [...this.state.todos];
    arr.splice(id, 1);
    console.log(arr);
    this.setState({ todos: arr });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="wrapper">
        <TodoForm addTodos={this.addTodos} />
        <ul className="todo">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              id={index}
              toggleComplete={() => this.toggleComplete(index)}
              deleteTask={() => this.deleteTask(index)}
              value={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
