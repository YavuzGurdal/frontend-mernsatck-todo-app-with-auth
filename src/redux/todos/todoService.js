import axios from 'axios'

const API_URL = 'todos/'

// Get user todos
const getTodos = async () => {
    const response = await axios.get(API_URL)

    return response.data
}

//Create User todo (axios)
const createTodo = async (todo) => {
    const response = await axios.post(API_URL, todo)

    return response.data
}

// Delete user todo
const deleteTodo = async (todoId) => {

    const response = await axios.delete(API_URL + todoId)

    return response.data
}

const todoService = {
    createTodo, deleteTodo, getTodos,
}

export default todoService