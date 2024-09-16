import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

// NOTES
/*
-setTodos is a setter function
-<TodoInput handleAddTodos={handleAddTodos}/> => connect input element to todo list processing function
-useEffect runs code based on events
*/

function App() { // Highest level parent component

   const [todos, setTodos] = useState([])
   const [todoValue, setTodoValue] = useState('') // Contents of input element connected to App and TodoList

   function persistData(newList) { // Local data storage function
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
   }

   function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo] // Spread out the old todos list and add new todo
    persistData(newTodoList)
    setTodos(newTodoList) // Updates todo list
   }

   function handleDeleteTodo(index) { // Pass in index of to-be-removed todo
    const newTodoList = todos.filter((todo, todoIndex) => { // Remove a todo from the todo list
        return todoIndex !== index // Keep todos without the doomed index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
   }

   function handleEditTodo(index) {
    const valueToBeEdited = todos[index] // Get index of to-be-modified todo
    setTodoValue(valueToBeEdited) // Put list element contents into input bar element
    handleDeleteTodo(index) // Remove element from list
   }

   useEffect(() => {
    if (!localStorage) { // If local storage doesn't exist
      return
    }

    let localTodos = localStorage.getItem('todos') // Try to get a saved todo list
    if (!localTodos) {
      return
    }

    console.log(localTodos) // Record the list in a console
    localTodos = JSON.parse(localTodos).todos // Attach todo list to a variable
    setTodos(localTodos) // Present todo list

  }, []) // Run on page load

  return ( // Components go between main tags
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
