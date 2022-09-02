import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK } from "../types/type";

const initialState = {
    todos: [
        {
            id: Math.random(),
            task: 'The first one',
            isDone: false
        },
        {
            id: Math.random(),
            task: 'Another one',
            isDone: true
        },
        {
            id: Math.random(),
            task: 'The third one',
            isDone: true,
        },
        {
            id: Math.random(),
            task: 'The last one',
            isDone: true,
        }
    ]
}

const TaskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_TASK':
            return { ...state, todos: [...state.todos, payload] }
        case 'DELETE_TASK':
            return { ...state, todos: state.todos.filter(elt => elt.id !== payload) }
        case 'COMPLETE_TASK':
            return { ...state, todos: state.todos.map(elt => (elt.id === payload) ? { ...elt, isDone: !elt.isDone } : elt) }
        case 'EDIT_TASK':
            return { ...state, todos: state.todos.map(elt => (elt.id === payload.idTask) ? { ...elt, task: payload.value } : elt) }
        default:
            return state;
    }
}

export default TaskReducer