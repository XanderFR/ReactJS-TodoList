import React from 'react'

// NOTES
/*
-To render out children components within a component,
we go into the component and receive the children through
'props' or properties of the component
*/

export default function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo} = props // Gets a 'todo' item | Get function | Get index of a todo
    return ( // Present 'todo' item on the page
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEditTodo(index)
                }}><i className="fa-solid fa-pen-to-square"></i></button>
                <button onClick={() => {
                    handleDeleteTodo(index)
                }}><i className="fa-regular fa-trash-can"></i></button>
            </div>
        </li>
    )
}