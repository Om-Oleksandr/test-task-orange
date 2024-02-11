import { useState } from 'react'
import Form from './AddForm'
import List from './List'
import { Task } from 'utils/types'

function App() {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const addTask = (task: Task) => {
    setTasks((prev) => {
      if (prev && prev.some((t) => t.name === task.name)) {
        return prev
      } else {
        return prev ? [...prev, task] : [task]
      }
    })
  }
  return (
    <main className="m-auto flex max-w-screen-xl flex-col items-center ">
      <Form addTask={addTask} />
      <List tasks={tasks} setTasks={setTasks} />
    </main>
  )
}

export default App
