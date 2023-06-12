import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

// this passes the todo as a state for the editing and deleting a specific task

export const Todo = ({ task, editTodo, deleteTodo, toggleComplete }) => {

  return (
    <div className="Todo">
      <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faEdit} color='#8758ff' className='todo-btn-icon' onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrashCan} color='#8758ff' className='todo-btn-icon' onClick={() => deleteTodo(task.id)} />

      </div>
    </div>
  )
}
