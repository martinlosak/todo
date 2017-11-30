import React from 'react'

export const Checkbox = (props) => (
    <li key={props.key}>
        <input type="checkbox" defaultChecked={props.checked}/> {props.name}
    </li>
)