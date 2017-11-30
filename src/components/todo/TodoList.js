import React from 'react'
import {Checkbox} from '../../Checkbox'

export const TodoList = (props) => {
    const todos = props.todos.map(todo => <Checkbox key={todo.id}
                                                    name={todo.name}
                                                    checked={todo.isComplete}/>)
    return <ul>{todos}</ul>
}