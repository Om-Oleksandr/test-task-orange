import { Task } from 'utils/types'
import ListItem from './ListItem'
type ListProps = {
  tasks: Task[] | null
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
}

function List(props: ListProps) {
  const { tasks, setTasks } = props
  const mapTasks = (task: Task, i: number) => (
    <ListItem key={i} task={task} setTasks={setTasks} />
  )
  return (
    <div className="w-80">
      {tasks && tasks.length > 0 ? (
        <ul>{tasks?.map(mapTasks)}</ul>
      ) : (
        <p>No tasks to do</p>
      )}
    </div>
  )
}

export default List
