import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import todoService from './todoService'

const initialState = {
    todos: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create user Todo
export const createTodo = createAsyncThunk('todos/create',
    async (todo, thunkAPI) => {
        try {
            return await todoService.createTodo(todo)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Delete user todo
export const deleteTodo = createAsyncThunk('todos/delete',
    async (id, thunkAPI) => {
        try {
            return await todoService.deleteTodo(id) // goalService'den gelen deleteGoal() fonksiyonunu calistiriyorum
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get user todos
export const getTodos = createAsyncThunk('todos/getAll',
    async (_, thunkAPI) => {
        try {
            return await todoService.getTodos()
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        reset: (state) => initialState, // state'i resetlemek icin
        // reset: (state) => {
        //     state.isError = false
        //     state.isSuccess = false
        //     state.isLoading = false
        //     state.message = ''
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.todos = action.payload
            })

            .addCase(getTodos.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            // .addCase(login.pending, (state) => {
            //     state.isLoading = true
            // })
            // .addCase(login.fulfilled, (state, action) => {
            //     state.isLoading = false
            //     state.isSuccess = true
            //     state.user = action.payload
            // })
            // .addCase(login.rejected, (state, action) => {
            //     state.isLoading = false
            //     state.isError = true
            //     state.message = action.payload
            //     state.user = null
            // })
            // .addCase(logout.fulfilled, (state) => {
            //     state.user = null
            // })
            .addCase(createTodo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.todos.push(action.payload)
            })
            .addCase(createTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteTodo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.todos = state.todos.filter((todo) => todo._id !== action.payload.id)
                // action.payload.id'deki id'yi goalController.js icindeki deleteTodo'den res.status(200).json({ id: req.params.id }) seklinde gonderdim
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = todoSlice.actions
export default todoSlice.reducer