import React from "react";

// previous attempt
// const TodoForm = prop => {
//   return (
//     <form>
//       <input
//         type="text"
//         value={props.info}
//         name="Todo"
//         onChange={props.handleChanges}
//       />
//       <button onClick={props.updateList}> Add Todo</button>
//     </form>
//   );
// };
//  export default TodoForm

const TodoForm = props => { // makes the TodoForm function
  return (
    //   creates a form on the page where you can add new stuff and buttons
    <form>
        
      <input  /* adds a box where you can input text */
        onChange={props.handleTodoChange} /*comand what happens when changes are made like adding text*/
        type="text" /* type of input happening*/
        name="todo" /* the name of the input being added*/
        value={props.value} /*lets you add the value which would be the new todo task */
        placeholder="... todo" /* the text that show inside the box before you type*/
      />
      <button onClick={props.handleAddTodo}>Add New </button> {/* adds a button which you will which you will command in app.js*/}
      <button onClick={props.handleClearTodo}>Clear Completed</button> {/* adds a button which you will which you will command in app.js*/}
    </form>
  );
};

export default TodoForm;