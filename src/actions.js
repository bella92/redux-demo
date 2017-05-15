export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text) {
  return { type: ActionTypes.ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: ActionTypes.TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: ActionTypes.SET_VISIBILITY_FILTER, filter }
}