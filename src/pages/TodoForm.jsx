import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todos/todoSlice'
import { RiTodoLine } from 'react-icons/ri'

const TodoForm = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createTodo({ todo }))
        setTodo('')
    }
    return (
        <section className="form">
            <div className="form-wrapper">
                <form onSubmit={onSubmit}>

                    <div className="form-group" >
                        <label htmlFor='todoInput'>Set a Todo</label>
                        <input id='todoInput' value={todo} name='todo' type="text" className="form-control todo-input" placeholder='Enter your todo'
                            onChange={(e) => setTodo(e.target.value)}
                        />
                        <div className="input-icon todo-input-icon"><RiTodoLine size={22} /></div>
                    </div>
                    <div className="form-group">
                        <button type='submit'><span>Add Todo</span></button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default TodoForm