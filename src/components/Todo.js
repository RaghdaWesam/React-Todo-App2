import React from 'react'

function Todo(props){
    // Each Todo
  
    return (<li >

    <div id="checkBoxx" ><input type="checkbox" onChange={()=>{props.toggle(props.todo.id)}} /></div>
    <div id="todoText"
    style={{
      textDecoration:
      props.todo.completed_at===null?
        'none':
      'line-through'

    }}>{props.todo.name}</div>

    <button aria-label="Close Account Info Modal Box" onClick={() => {props.remove(props.todo.id)}}>&times;</button>
    </li>);
  }

  export default Todo;
