import '../App.css'
import './styles.scss'
import { useState } from 'react'
import InputField from './inputField'
import { Todo } from './models'
import TodoList from './Todos'

const TaskApp = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault()
        if (todo) {
            setTodos([...todos, {
                id: Date.now(), todo: todo, isDone: false
            }])
        }
        else{
            alert('type a todo...')
        }
        setTodo('')
    }

  return (
    <div className="App w-full h-full flex justify-center align-center flex-col">
      <span className="heading text-white m-5">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>

      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TaskApp