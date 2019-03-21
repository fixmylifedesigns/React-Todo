import React from "react";
import Todo from "./Todo";

//previous attempt
// import TodoForm from "./TodoForm";
// const todos = [
//   {   info: 'stuff',   } ];
// class TodoList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todoList: todos,
//       info: ''  }; }
//   handleChanges = event => {
//     this.setState({
//       [event.target.name]: event.target.value }); };
//   updateList = event => {
//     event.perventDefault();
//     const newTodo = {
//       info: this.state.info };
//     this.setState({
//       todoList: [...this.state.todoList, newTodo] }); };
//   render() {
//       return (
//           <div className="TodoList-wrapper">
//           <h1>Todo List</h1>
//           <div className="class-list">
//           {this.state.todoList.map((todoFromMap, index) => (
//              <Todo key={index} todoProp={todoFromMap} />
//               ))}
//           </div>
//           <TodoForm
//           info={this.state.info}
//           handleChanges={this.handleChanges}
//           updateList={this.updateList}
//           />
//           </div> );} }
// export default TodoList;
// so in my previous attempt i thought i had to add the app stuff here then put it to
// app.js but i was wrong looks like im creating a funtion here to push to app.js

//create the function TodoList
const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        //   here we are creating a function for controlling the task
        <Todo
          // we add the toggle which would switch it to complete when clicked
          handleToggleCompleted={props.handleToggleComplete}
          //git it a unique id
          key={todo.id}
          //the name of the task
          todo={todo}
        />
      ))}
    </div>
  );
};

// export it out will be imported in app.js
export default TodoList;
