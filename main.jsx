import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { useReducer } from './userReducer'

const store = configureStore({
    reducer: {
        users: useReducer,
        // Add reducers here
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>,
)
