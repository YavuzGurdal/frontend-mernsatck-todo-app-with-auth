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

const authService = {
    login
}

export default authService