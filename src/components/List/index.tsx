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
  const sortedTasks = tasks?.sort(
    (firstItem, secondItem) =>
      Number(firstItem.isDone) - Number(secondItem.isDone)
  )
  return (
    <div className="h-3/4 w-80 max-w-full">
      {sortedTasks && sortedTasks.length > 0 ? (
        <ul>{tasks?.map(mapTasks)}</ul>
      ) : (
        <h1 className="text-2xl">No tasks to do</h1>
      )}
    </div>
  )
}

export default List
