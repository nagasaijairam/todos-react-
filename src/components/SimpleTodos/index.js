import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem/index'

import './index.css'

// Write your code here

const LocalStorage = () => {
  const stringifiedTodoList = localStorage.getItem('todosList')
  const parsedTodoList = JSON.parse(stringifiedTodoList)

  if (parsedTodoList === undefined) {
    return null
  }
  return parsedTodoList
}

const ans = LocalStorage() ? LocalStorage() : []
console.log(ans)

console.log(ans)

class SimpleTodos extends Component {
  state = {todosList: [...ans], userInput: ''}

  inputElement = () => {
    const {userInput} = this.state
    return (
      <div>
        <input
          type="text"
          placeholder="What need to be done?"
          className="input-element"
          onChange={this.onUserInput}
          value={userInput}
        />
      </div>
    )
  }

  onDeleteItem = id => {
    const {todosList} = this.state

    const updatedList = todosList.filter(i => i.id !== id)

    this.setState({todosList: updatedList})
  }

  onUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddTodos = () => {
    const {userInput} = this.state
    const newTodo = {
      id: uuidv4(),
      title: userInput,
    }
    if (userInput === '') {
      alert('Please Enter the Text')
    } else {
      this.setState(prevState => ({
        todosList: [...prevState.todosList, newTodo],
        userInput: '',
      }))
    }
  }

  onSave = () => {
    const {todosList} = this.state
    if (todosList !== []) {
      localStorage.setItem('todosList', JSON.stringify(todosList))
    }
  }

  render() {
    const {todosList} = this.state
    // console.log(todosList)

    return (
      <div className="main-div">
        <h1 className="head1">Todos</h1>
        <div className="card-div">
          <h1 className="main-head2">
            <span className="task1">Create</span> Task
          </h1>
          <this.inputElement />
          <button type="button" className="btn1" onClick={this.onAddTodos}>
            Add
          </button>

          <div className="card2">
            <h1 className="main-head2">
              <span className="task1">My</span> Tasks
            </h1>

            <ul className="ul1">
              {todosList.map(i => (
                <TodoItem
                  key={i.id}
                  details={i}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
            <button type="button" className="btn1" onClick={this.onSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
