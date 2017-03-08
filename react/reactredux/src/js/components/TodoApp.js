import React from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import * as user from "../actions/userActions";
import * as todo from "../actions/todoActions";
//import axios from "axios";

// user.readUser();
@connect((store)=>{
    //the return becomes props
    return {
        user:store.user.user,
        todos:store.todos.todos
    }
})
export default class TodoApp extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // //   this.state = {todos: [], text: ''};
  // }

  componentWillMount(){
      console.log("Mounting:",this.props.user);
      this.props.dispatch(user.readUser());
    //   this.props.dispatch(todo.readAll());
    //   this.props.dispatch({type:"TODO_CREATE",payload:{text:"something"}});
    //   this.props.dispatch({type:"TODO_CREATE",payload:{text:"something else"}});
      //
    //   this.props.dispatch((dispatch) => {
    //           dispatch({type:"TODO_CREATE",payload:{text:"#3"}});
    //           //async here
    //           axios.get("https://jsonplaceholder.typicode.com/posts")
    //               .then((response) => {
    //                   console.log(response);
    //                   dispatch({type:"TODO_CREATE",payload:{text:"#4"}});
    //               })
    //               .catch((err) => {
    //                   //dispatch error
    //               });
    //           //done with async
    //   })
  }

  handleSubmit(e){
      e.preventDefault();
  }

  readUser(){
      this.props.dispatch(user.readUser());
  }

  loadTodos(){
      this.props.dispatch(todo.readAll());
  }

  render() {
      console.log(this.props);
      const todos = this.props.todos.map(todo => <li>{todo.text}</li>);
    return (
      <div>
        <h3>TODO</h3>
        <TodoList />
        <button onClick={this.readUser.bind(this)}>Read User</button>
        <button onClick={this.loadTodos.bind(this)}>Load Todos</button>
      </div>
    );

  }
}
