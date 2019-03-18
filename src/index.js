import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Todo from './ToDo'
import store from './stores/TodoStore'


ReactDOM.render(<Todo store={store}/>, document.getElementById('root'));
serviceWorker.unregister();
