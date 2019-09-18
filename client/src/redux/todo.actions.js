import {ADD_TODO} from "./todo.types";


let ID = 0
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: ID++,
        text
    }
}