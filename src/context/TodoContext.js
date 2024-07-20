import {createContext, useContext} from 'react';

export const todoContext = createContext({
    todos:[
        {
            id:Date.now(),
            todo:"",
            completed:false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id,todo) => {},
    toggleTodo: (id) => {}
})

//custom hook
export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider