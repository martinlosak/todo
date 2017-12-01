import React from 'react'
import PropTypes from 'prop-types'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
    const todos = props.todos.map(todo => <TodoItem handleToggle={props.handleToggle}
                                                    handleRemove={props.handleRemove}
                                                    key={todo.id} {...todo}/>)
    return <ul>{todos}</ul>
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}