import React, { useState } from 'react'
import { useEffect } from 'react'
import './Todo.css'
import { json, useParams, Link } from 'react-router-dom'
import { CornerUpLeft } from 'lucide-react';

  

export const Todo = () => {
  const {todoId} = useParams()
  const [todo,setTodo] = useState('')

  useEffect(() => {
    const todosInStorage = JSON.parse(localStorage.getItem('todos'))
    
    if(todosInStorage){
      const selectedTodo = todosInStorage[todoId]
      if(selectedTodo) setTodo(selectedTodo)
    }
  }, [])
  



  return (
    <div className='todo-container'>
      <h3 className='todo-title'>{todo}</h3>
            <Link to={`/tasks`}  className='CornerUpLeft-container'>
                  <CornerUpLeft className='CornerUpLeft-icon'/>
            </Link>
      </div>
  )
}
