import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export const Header = () => {

    return (
        <div className='Header'>
            <Link to="/todos">All</Link>
            <Link to="/todos/active">Active</Link>
            <Link to="/todos/complete">Complete</Link>
        </div>
    )
}

export default Header