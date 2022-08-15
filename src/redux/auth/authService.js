// import axios from 'axios'
import { axiosInstance } from "../../config"

const API_URL = '/api/auth/'

//Login User (axios)
const login = async (userData) => {
    const response = await axiosInstance.post(API_URL + "signin", userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Logout User (axios)
const logout = async () => {
    const response = await axiosInstance.get(API_URL + "logout")

    if (response.data) {
        localStorage.removeItem('user')
    }

    return response.data
}

//Signup User (axios)
const signup = async (userData) => {
    const response = await axiosInstance.post(API_URL + "signup", userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    login, logout, signup
}

export default authService