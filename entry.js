import { createStore } from 'redux'
import { todoApp } from './src/reducers'
import { addTodo } from './src/actions'

let store = createStore(todoApp)

console.log(store.getState())

let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodo('Learn actions!'))
store.dispatch(addTodo('Learn reducers!'))

unsubscribe()