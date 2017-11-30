import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Menu from './Menu'
import {TodoForm, TodoList} from './components/todo'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [
                {id: 1, name: 'Props vs. State', isComplete: true},
                {id: 2, name: 'Managed vs. Unmanaged components', isComplete: false},
                {id: 3, name: 'JSX', isComplete: false}
            ],
            currentTodo: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        this.setState({
            currentTodo: event.target.value
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo}/>
                    <TodoList todos={this.state.todos}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App