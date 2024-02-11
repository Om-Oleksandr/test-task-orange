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
      <span className="max-w-60 truncate text-nowrap">{task.name}</span>
      <div className="flex w-20 justify-around">
        <button
          className="p-1"
          onClick={() => markDone(task.id)}
          disabled={task.isDone}
        >
          <Done />
        </button>
        <button className="p-1" onClick={() => removeTask(task.id)}>
          <Delete htmlColor="red" />
        </button>
      </div>
    </li>
  )
}

export default ListItem
