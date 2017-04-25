import React from 'react'

function TodoForm(props){
    // Input Tracker
    let input;
    // Return JSX
    return (
      <div>
        <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          props.addTodo(input.value);
          input.value = '';
        }}>
          +
        </button>
      </div>
    );
  }
export default TodoForm;
