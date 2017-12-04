import React from 'react'
import {TodoForm, TodoList} from './components/todo'
import {addTodo, findById, generateId, toggleTodo, updateTodo, removeTodo, filterTodos} from "./lib/todoHelpers";
import {pipe, partial} from "./lib/utils";
import {Alert} from 'react-bootstrap'
import {loadTodos, createTodo, saveTodo, deleteTodo} from "src/lib/todoService";

class Todo extends React.Component {
    state = {
        todos: [],
        currentTodo: ''
    }

    componentDidMount() {
        loadTodos()
            .then(todos => this.setState({todos}))
    }

    handleRemove = (id, event) => {
        event.preventDefault()
        const updatedTodos = removeTodo(this.state.todos, id)
        this.setState({todos: updatedTodos})
        deleteTodo(id)
            .then(() => this.showTempMessage('Todo deleted'))
    }

    handleToggle = (id) => {
        const getToggledTodo = pipe(findById, toggleTodo)
        const updated = getToggledTodo(id, this.state.todos)
        const getUpdatedTodos = partial(updateTodo, this.state.todos)
        const updatedTodos = getUpdatedTodos(updated)
        this.setState({todos: updatedTodos})
        saveTodo(updated)
            .then(() => this.showTempMessage('Todo updated'))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newId = generateId()
        const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
        const updatedTodos = addTodo(this.state.todos, newTodo)
        this.setState({
            todos: updatedTodos,
            currentTodo: '',
            errorMessage: ''
        })
        createTodo(newTodo)
            .then(() => this.showTempMessage('Todo added'))
    }

    showTempMessage = (msg) => {
        this.setState({message: msg})
        setTimeout(() => this.setState({message: ''}), 2500)
    }

    handleEmptySubmit = (event) => {
        event.preventDefault()
        this.setState({errorMessage: 'Please supply a todo name'})
    }

    handleInputChange = (event) => {
        this.setState({currentTodo: event.target.value})
    }

    render() {
        const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
        const displayTodos = filterTodos(this.state.todos, this.props.match.params.state)

        return (
            <div>
                {this.state.errorMessage && <Alert bsStyle="warning">{this.state.errorMessage}</Alert>}
                {this.state.message && <Alert>{this.state.message}</Alert>}
                <TodoForm handleSubmit={submitHandler}
                          handleInputChange={this.handleInputChange}
                          currentTodo={this.state.currentTodo}/>
                <TodoList todos={displayTodos}
                          handleToggle={this.handleToggle}
                          handleRemove={this.handleRemove}/>
            </div>
        )
    }
}

export default Todo