import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem/index'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {totosList: [], userInput: ''}

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
    const {totosList} = this.state

    const updatedList = totosList.filter(i => i.id !== id)
    this.setState({totosList: updatedList})

    console.log(updatedList)
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
        totosList: [...prevState.totosList, newTodo],
        userInput: '',
      }))
    }
  }

  onSave = () => {
    const {todosList} = this.state
    localStorage.setItem('todosList', JSON.stringify(todosList))
  }

  LicalStorage = () => {
    const stringifiedTodoList = localStorage.getItem('todosList')
    const parsedTodoList = JSON.parse(stringifiedTodoList)

    if (parsedTodoList === undefined) {
      return null
    }
    return this.setState({todosList: parsedTodoList})
  }

  render() {
    const {totosList} = this.state

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
              {totosList.map(i => (
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
