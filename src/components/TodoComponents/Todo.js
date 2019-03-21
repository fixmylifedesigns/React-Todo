import React from "react";
// previos attempt
// function Todo(props) {
//     return (
//     <div className="todo-info">
//     <p>{props.todoprop.info}</p>
//     </div>
//     );
// }

// export default Todo

const Todo = props => {
  return (
    // div which sets a toggle onclick for the task and style line through when clicked
    <div className="list">
    <li className="task"
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.handleToggleCompleted(props.todo.id)}
    >
      {/* name of task */}
      {props.todo.task}
    </li>
    </div>
  );
};

// export it out will be imported in todolist.js
export default Todo;
