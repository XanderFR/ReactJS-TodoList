import React from 'react'
import TodoCard from './TodoCard'

// NOTES
/*
-(todo, todoIndex) => map callback function that takes string and index number arguments
for every element in todos, run a function that turns the element into an HTML list element
-'todo' gets sent to TodoCard for processing
-{...props} => send props directly to component
*/

export default function TodoList(props) {
    const {todos} = props
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}