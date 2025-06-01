import React from 'react'

const TodoInput = ({input, setInput, handleSubmit}) => {

  return (
    <div>
       <h1 className='text- text-3xl font-bold tracking-wider  mb-5'>My Todo List</h1>

          <form onSubmit={handleSubmit} className='flex flex-wrap gap-2 justify-between'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text" placeholder="Enter todo here " className="input input-primary" />

            <button className='btn btn-outline btn-primary text-white'>Add Task</button>
          </form>

    </div>
  )
}

export default TodoInput