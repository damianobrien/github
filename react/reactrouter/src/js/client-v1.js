import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp";
import { Provider } from "react-redux";
import store from "./store";

import { Router, Route, hashHistory } from 'react-router'



const app = document.getElementById('app');



// ReactDOM.render(<Provider store={store}><TodoApp /></Provider>, app);
ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={TodoApp}/>
        </Router>
    </Provider>
), app);
