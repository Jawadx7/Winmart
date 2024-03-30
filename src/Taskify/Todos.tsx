import React from 'react'
import { Todo } from './models'

interface Props{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div className="p-4 w-full">
        {
            todos.map(({id, todo, isDone}) => (
                <ul key={id} className='w-full flex justify-between align-center bg-yellow-400 text-black px-2 py-1 my-4'>
                    <li>{todo}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default TodoList