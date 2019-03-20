import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        //creating a tast that will appear in the page
        {
          //task name
          task: "clean bike",
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

  changeTodo = event =>
    this.setState({ [event.target.name]: event.target.value });

  toggleTodoComplete = id => {
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

clearCompletedTodo = event => {
  event.preventDefault();
  let todos = this.state.todosfilter(todo => !todo.completed);
  this.setState({ todos });
};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <div>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
      </div>
    );
  }
}

export default App;
