import React, { Component } from 'react';
import {observer} from 'mobx-react';


@observer

class Todo extends Component {

    createNew(e) {
        if(e.which === 13) {
            this.props.store.createTodo(e.target.value)
            e.target.value = '';
        }

    }

    filter(e) {
        this.props.store.filter = e.target.value;

    }

    toggleComplete(todo) {
        todo.complete = !todo.complete;

    }

render(){
    const {clearComplate,filter, filtereTodos} = this.props.store;

    const todosAll= filtereTodos.map(todo => (
        <li key={todo.id}>{todo.value}
            <input type="checkbox" value={todo.complete} checked={todo.complete} onChange={this.toggleComplete.bind(this,todo)}/>
        </li>
    ));

    return (

        <div>
            <h2>To do list </h2>
            <div>{filter}</div>
            <input className="create form-control col-md-6" onKeyPress={this.createNew.bind(this)}/>
            <br/>
            <input type="text" placeholder="filtruj" value={filter} onChange={this.filter.bind(this)}
                   className="form-control col-md-6"/>
            <br/>
            <ul>{todosAll}</ul>
            <button className="btn btn-primary"onClick={clearComplate}>Clear complate</button>

        </div>
    );
}

}

export default Todo;