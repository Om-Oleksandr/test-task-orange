import React, { useState } from 'react'
import { Task } from 'utils/types'

type FormProps = {
  addTask: (task: Task) => void
}
function Form(props: FormProps) {
  const [name, setName] = useState('')
  const { addTask } = props
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (name !== '') {
      const task = {
        id: Date.now(),
        name,
        isDone: false
      }
      addTask(task)
    }
    setName('')
    e.preventDefault()
  }
  return (
    <form onSubmit={(e) => submitForm(e)} className="flex w-80 gap-x-5">
      <input
        className="w-full border border-solid border-black p-2 outline-none"
        type="text"
        name="task"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="min-w-20 border border-solid border-black p-2"
        type="submit"
      />
    </form>
  )
}

export default Form
