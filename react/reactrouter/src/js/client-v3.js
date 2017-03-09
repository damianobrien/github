import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp";
import { Provider } from "react-redux";
import store from "./store";

import { Router, Route, hashHistory } from 'react-router'
import About from "./pages/About";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation";

const app = document.getElementById('app');

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={TodoApp}/>
            {/* add the routes here */}
            <Route path="/profile" component={Profile}/>
            <Route path="/about" component={About}/>
        </Router>
    </Provider>
), app);
