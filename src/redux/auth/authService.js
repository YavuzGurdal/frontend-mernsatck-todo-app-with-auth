import axios from 'axios'

const API_URL = 'auth/'

//Login User (axios)
const login = async (userData) => {
    const response = await axios.post(API_URL + "signin", userData)

    if (response.data) {
        localStorage.setItem('user_todo', JSON.stringify(response.data))
    }

    return response.data
}

//Logout User (axios)
const logout = async () => {
    const response = await axios.get(API_URL + "logout")

    if (response.data) {
        localStorage.removeItem('user_todo')
    }

    return response.data
}

//Signup User (axios)
const signup = async (userData) => {
    const response = await axios.post(API_URL + "signup", userData)

    if (response.data) {
        localStorage.setItem('user_todo', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    login, logout, signup
}

export default authService