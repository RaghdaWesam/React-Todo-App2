import React from "react";
import axios from "axios";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const API_URL="http://todolist.coligoapp.com/raghda/todos";

const Title = () => {
  return (
    <div>
       <div>
          <h1>to-do</h1>
       </div>
    </div>
  );
}

window.id = 0;
export default class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
      // done:''
    }
    this.addTodo = this.addTodo.bind(this);
    this.handleRemove= this.handleRemove.bind(this);
    this.toggleTodo= this.toggleTodo.bind(this);
  }




  componentDidMount(){

  axios.get(`${API_URL}`).then((response)=> {
      this.setState({data:response.data.todos});
    },
    function (error) {
      console.log(error);
    } ) ;


}


  addTodo(val){
    const todo = {name: val, id: window.id++}
    axios.post(`${API_URL}`, todo)
       .then((response) => {
        const todos = [...this.state.data,response.data.todo];
        this.setState({data: todos});
       },function (error) {
         console.log(error);
       });
  }

  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete(`${API_URL}/${id}`)
      .then((response) => {
        this.setState({data: remainder});
      },function (error) {
        console.log(error);
      });
  }

  toggleTodo(id){
   axios.patch(`${API_URL}/${id}/toggle`)
     .then((response) => {
       const toggle = this.state.data.filter((todo) => {
         if(todo.id === id)
           return response.data.todo;
           else return todo;
       });

      this.setState({data: toggle});

     },function (error) {
       console.log(error);
     });
 }

//  toggleTodo(id){
//    const remainder = this.state.data.filter((todo) => {
//      if(todo.id !== id) return todo;
//    });
//
//   axios.patch(`${API_URL}/${id}/toggle`)
//     .then((response) => {
//      this.setState({data: remainder});
//      if(this.state.done===''){
//      this.setState({done: 'true'});
//      const todos = [...this.state.data,response.data.todo];
//       this.setState({data: todos});
//    }
//    else{
//     //  this.setState({done:''});
//     this.state.done='';
//       const todos = [response.data.todo,...this.state.data];
//        this.setState({data: todos});
//    }
//
//
//     },function (error) {
//       console.log(error);
//     });
//
//
//
// }

  render(){
    // Render JSX
    return (
      <div>
        <Title />

        <TodoForm addTodo={this.addTodo}/>

        <TodoList
          todos={this.state.data}

          remove={this.handleRemove}

          toggle={this.toggleTodo}

          done={this.state.done}

        />
      </div>
    );
  }
}
