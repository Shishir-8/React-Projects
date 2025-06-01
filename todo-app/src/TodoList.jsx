import React from 'react'
import { TiDelete } from "react-icons/ti";


const TodoList = ({ todos, setTodos, editId, setEditId, editText, setEditText }) => {


    const handleDelete = (id) => {
        const deleteTodo = todos.filter((todo) => todo.id !== id)
        setTodos(deleteTodo)

    }

    const handleEdit = (todo) => {
        setEditId(todo.id)
        setEditText(todo.text)
    }

    const handleEditSave = ()=>{
        const updatedTodos = todos.map((todo)=> todo.id === editId? {...todo, text: editText}: todo)

        setTodos(updatedTodos)
        setEditId(null)
        setEditText("")


    }

    return (
        <div>
            <h1 className='mt-3 mb-3 tracking-wide font-bold'>Tasks</h1>

            <div>
                {todos.length === 0 ? <p className='bg-gray-700 p-2 py-3 rounded'>No todos available</p> :

                    <ul className='space-y-2'>
                        {todos.map((todo) =>
                            <li key={todo.id} className='bg-gray-700 p-2 py-3 rounded flex items-center relative'>
                                {editId === todo.id ?
                                    <>
                                        <input
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            type="text" className="input input-primary" />

                                            <button onClick={()=> handleEditSave(todo.id)}>Save</button>

                                    </> :
                                    <>
                                        <span>{todo.text}</span>
                                        <button onClick={()=> handleEdit(todo)}
                                        className='absolute right-12'>Edit</button>
                                        <button
                                            onClick={() => handleDelete(todo.id)}
                                            className='absolute right-3 hover:bg-gray-600'><TiDelete size={25} /></button>
                                    </>
                                }
                            </li>
                        )}
                    </ul>
                }
            </div>




        </div>
    )
}

export default TodoList