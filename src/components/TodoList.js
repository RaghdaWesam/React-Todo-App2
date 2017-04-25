import React from 'react'
import Todo from './Todo';
function TodoList (props){
    // Map through the todos

    var alltodos;
    if(props.todos){
      alltodos=props.todos;
  }
  else{
    alltodos=[];

  }
    const todoNode = alltodos.map((todo,i) => {
      return (<Todo todo={todo} key={i} remove={props.remove} toggle={props.toggle}/>)
    });
    return (<ul>{todoNode}</ul>);

  }

export default TodoList;
