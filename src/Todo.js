import React from 'react'
import {TodoForm, TodoList} from './components/todo'
import {addTodo, findById, generateId, toggleTodo, updateTodo, removeTodo, filterTodos} from "./lib/todoHelpers";
import {pipe, partial} from "./lib/utils";
import {Alert} from 'react-bootstrap'

class Todo extends React.Component {
    state = {
        todos: [
            {id: 1, name: 'Props vs. State', isComplete: true},
            {id: 2, name: 'Managed vs. Unmanaged components', isComplete: false},
            {id: 3, name: 'JSX', isComplete: false}
        ],
        currentTodo: ''
    }

    handleRemove = (id, event) => {
        event.preventDefault()
        const updatedTodos = removeTodo(this.state.todos, id)
        this.setState({todos: updatedTodos})
    }

    handleToggle = (id) => {
        const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
        const updatedTodos = getUpdatedTodos(id, this.state.todos)
        this.setState({todos: updatedTodos})
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