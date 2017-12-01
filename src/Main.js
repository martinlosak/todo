import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Todo from "src/Todo";

const home = '/todos'

const Main = () => (
    <Switch>
        <Route path="/todos/:state" component={Todo}/>
        <Redirect to={home}/>
    </Switch>
)

export default Main