export const ActionTypes = {
  ADD_TODO: 'ADD_TODO'
}

// export const VisibilityFilters = {

// }

export function addTodo(text) {
  return {
    type: ActionTypes.ADD_TODO,
    text
  }
}