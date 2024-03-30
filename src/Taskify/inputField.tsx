import React from 'react'

interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent)=> void
}

const InputField = ({todo, setTodo, handleAdd}:Props) => {
  return (
    <form onSubmit={handleAdd}>
        <input className='outline-0 px-3 py-2 rounded-sm' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder='Enter Task'
        />
        <button type='submit' className='bg-orange-400 text-white mx-5 w-10 h-10 rounded-full p-1'>Add</button>
      </form>
  )
}

export default InputField