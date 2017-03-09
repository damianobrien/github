import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp";
import { Provider } from "react-redux";
import store from "./store";

import {
  BrowserRouter as Router, StaticRouter, // for server rendering
  Route,   Link
  // etc.
} from 'react-router-dom';


const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}><TodoApp /></Provider>, app);
