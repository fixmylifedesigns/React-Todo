import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";
import Clock from "./components/Clock";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        //creating a tast that will appear in the page
        {
          //task name
          task: "Clean Bike",
          // task id
          id: 1,
          //set to false so it remains on the page until you click on it and clear complete
          completed: false
        },
        {
          task: "Feed hedgehogs",
          id: 2,
          completed: false
        }
      ],
      //create space where your new task will go
      todo: ""
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = event => {
    event.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ""
    });
  };

  changeTodo = apple =>
    this.setState({ [apple.target.name]: apple.target.value });

  toggleTodoCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });

    this.setState({ todos });
  };

clearCompletedTodo = clearList => {
  clearList.preventDefault();
  let todos = this.state.todos.filter(todo => !todo.completed);
  this.setState({ todos });
};

  render() {
    return (
      <div className="container">
        <h2 className="header">Welcome to your Todo App!</h2>
      <Clock className="clock" />
      <div>

        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodo={this.clearCompletedTodo}
        />
        <TodoList
          handleToggleComplete={this.toggleTodoCompleted}
          todos={this.state.todos}
        />
      </div>
      </div>
    );
  }
}

export default App;