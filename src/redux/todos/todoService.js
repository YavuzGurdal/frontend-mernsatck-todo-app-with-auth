import axios from 'axios'
// import { axiosInstance } from "../../config"

const API_URL = '/api/todos/'

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

// Delete user todo
const completeTodo = async (todoId) => {

    const response = await axios.get(API_URL + 'complete/' + todoId)

    return response.data
}

// Update user todo
const updateTodo = async (todoData) => {
    // console.log(todoData)

    const response = await axios.put(API_URL + todoData._id, todoData)

    return response.data
}

const todoService = {
    createTodo, deleteTodo, getTodos, completeTodo, updateTodo
}

export default todoService