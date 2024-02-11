import { Task } from 'utils/types'
import { Done, Delete } from '@mui/icons-material'
type ItemProps = {
  task: Task
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
}

const ListItem = (props: ItemProps) => {
  const { task, setTasks } = props
  const removeTask = (id: number) => {
    setTasks((prev) => prev && prev.filter((elem) => elem.id !== id))
  }
  const markDone = (id: number) => {
    setTasks(
      (prev) =>
        prev &&
        prev.map((elem) => {
          if (elem.id === id) {
            elem.isDone = true
          }
          return elem
        })
    )
  }
  return (
    <li className="flex items-center justify-between py-3">
      <span
        className={`max-w-60 truncate text-nowrap ${
          task.isDone ? 'select-none opacity-50' : 'opacity-100'
        }`}
      >
        {task.name}
      </span>
      <div className={`flex w-20 justify-around `}>
        <button
          className={`p-1 transition duration-300 hover:text-green-700 ${
            task.isDone ? 'pointer-events-none opacity-50' : 'opacity-100'
          }`}
          onClick={() => markDone(task.id)}
          disabled={task.isDone}
        >
          <Done />
        </button>
        <button
          className="p-1 transition duration-300 hover:text-red-600"
          onClick={() => removeTask(task.id)}
        >
          <Delete />
        </button>
      </div>
    </li>
  )
}

export default ListItem
