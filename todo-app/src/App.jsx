import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './TodoInput'
import TodoList from './TodoList'


const App = () => {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(()=>{

    const saved = localStorage.getItem('todos')
    return saved? JSON.parse(saved) : [];
  })

  const[editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")





  //save in local storage
  useEffect(()=>{
  localStorage.setItem('todos', JSON.stringify(todos) )
  }, [todos])


  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.trim()=== 0) return;

    const newTodo = {
      id: uuidv4(),
      text: input
    }

    setTodos([...todos, newTodo])
    setInput("")
  }


  


  return (
    <div className='flex justify-center items-center mt-20'>

      <div className='max-w-md w-full p-3'>

        <TodoInput input={input} setInput={setInput} handleSubmit={handleSubmit} />

        <TodoList
         todos={todos}
          setTodos={setTodos}
          editId={editId}
          setEditId={setEditId}
          editText={editText}
          setEditText={setEditText}
          />

      </div>



    </div>
  )
}

export default App