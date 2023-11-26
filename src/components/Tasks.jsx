import React, { useEffect, useState } from 'react'
import './Tasks.css'
import { Check, Pencil, Trash2, Loader2  } from 'lucide-react';
import {Link} from 'react-router-dom';
import { wait, delay } from '../lib/utils';
import { error, success } from '../lib/notification';


export const Tasks = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [todoIndex, setTodoIndex] = useState(-1)
  const [addTask, setAddTask] = useState(false)
  const [currentAddTask, setcurrentAddTask] = useState(todoIndex)

  useEffect(() => {
    const todosInStorage = JSON.parse(localStorage.getItem('todos'))
    if (todosInStorage) {
      setTodos(todosInStorage);
    }

  }, [todo])



  const handleAddTodo = async() => {
    if (!todo) return
    setAddTask(true)
    setcurrentAddTask(todoIndex+todos.length+1);
    await wait(1000);

    try{
      if (todoIndex > -1) {
      
        todos[todoIndex] = todo;
        localStorage.setItem('todos', JSON.stringify(todos))
        setTodoIndex(-1)
        success('task added successfuly')
      }
      else {
        const allTodos = [...todos, todo]
        localStorage.setItem('todos', JSON.stringify(allTodos))
        success('task added successfuly')
      }
      setTodo('')
      setAddTask(false);        
      setcurrentAddTask(false);
    } catch(err){
      error(err?.massage)
    } finally{
      setAddTask(false);        
    }



      

  }

  const handleDeleteToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const handleUpdateToDo = (index) => {
    setTodo(todos[index])
    setTodoIndex(index)
  }

  return (
    <div className='tasks-wrapper'>
      <div>
        <input
          onChange={({ target }) => { setTodo(target.value) }}
          placeholder='Add a new task...'
          className='task-input'
          disabled={addTask}
          value={todo}
          onKeyDown={(e)=>{
            if(e.key ==='Enter'){
              handleAddTodo()
            }
          }}
        />
        {addTask ? <Loader2 className='rotate-icon' />: 
        <Check
        className='task-icon'
        onClick={handleAddTodo}
        style={{ cursor: todo ? 'pointer' : 'not-allowed' }}
        />
        }
        
        
      </div>
      <div className='todos-wrapper'>
        {todos?.map((todo, index) => (
          <div className='todo-item' key={index}>
            <Link to={`/todo/${index}`} className='todo-link' >
            <span  style={{opacity: todoIndex === index ? 0.5: 1}}>
              {index + 1}. {todo}
            </span>
            </Link>

            <div>
              <Trash2
                onClick={() => { handleDeleteToDo(index) }}
                className='trash-icon' />
              <Pencil
                onClick={() => handleUpdateToDo(index)}
                className='pencil-icon'
               />
            </div>
          </div>
        ))}
        <div className='todo-item'>
          {(todoIndex === -1 && addTask) && <span style={{opacity:0.5}}>
            {todos.length+1}.{todo}
            </span>
            }
        </div>
      </div>
    </div>
  )
}
