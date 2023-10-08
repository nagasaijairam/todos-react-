import {useState} from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import {AiFillDelete} from 'react-icons/ai'

import './index.css'

const TodoItem = props => {
  const {details, onDeleteItem} = props
  const {id, title} = details

  const [checkbox, setcheckbox] = useState(false)

  const onDelet = () => {
    onDeleteItem(id)
  }

  const isChecked = e => {
    setcheckbox(e.target.checked)
  }

  const todoStyle = checkbox ? 'normal2' : 'normal1'

  return (
    <li className="listItem">
      <div className="ch1">
        <input type="checkbox" onChange={isChecked} className="check1" />
      </div>

      <div className="list-div">
        <p className={todoStyle}>{title}</p>

        <button type="button" onClick={onDelet} className="delete-button">
          <AiFillDelete />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
