import {ADD_TODO} from "./todo.types";

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        default:
            return state
    }
}