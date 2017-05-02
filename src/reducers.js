import { ActionTypes } from './actions'

const initialState = {
  todos: [],
  // visibilityFilter: 
}

export function todoApp(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state.todos, {
        text: action.text,
        completed: false
      }]
    default:
      return state
  }
}