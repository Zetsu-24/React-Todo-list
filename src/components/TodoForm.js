import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add new task
      addTodo(value);
      // clear set 
      setValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='todo-input' placeholder='Task to be done...' />
      <button type="submit" className='todo-btn'>Add</button>
    </form>
  )
}
