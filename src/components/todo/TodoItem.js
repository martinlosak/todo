import React from 'react'
import PropTypes from 'prop-types'
import {partial} from "../../lib/utils";

export const TodoItem = (props) => {
    const handleToggle = partial(props.handleToggle, props.id)
    const handleRemove = partial(props.handleRemove, props.id)

    return (
        <li>
            <input type="checkbox"
                   onChange={handleToggle}
                   checked={props.isComplete}/> {props.name}
            <a role='button' onClick={handleRemove}> x</a>
        </li>
    )
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool
}