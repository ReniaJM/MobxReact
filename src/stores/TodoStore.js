import {computed, observable} from "mobx";


class Todo {
    @observable value;
    @observable id;
    @observable complete;

    constructor(value) {
        this.value=value;
        this.id= Date.now();
        this.complete =false;
    }

}

class TodoStore {
    @observable todos=[];

    @observable filter='';

    @computed get filtereTodos(){
        var machesFilter = new RegExp(this.filter, "i")
        return this.todos.filter(todo => !this.filter || machesFilter.test(todo.value))
    }
    createTodo(value) {
        this.todos.push(new Todo(value))
    }
    clearComplate =()=> {
        const incompleteTodos = this.todos.filter(todo => !todo.complete);
        this.todos.replace(incompleteTodos);
    }

}

const store = new TodoStore();
export default store




