import { render, fireEvent } from '@testing-library/react'
import Form from './AddForm'
import List from './List'

describe('<List />', () => {
  it('renders correctly with tasks', () => {
    const tasks = [
      { id: 1, name: 'Task 1', isDone: false },
      { id: 2, name: 'Task 2', isDone: true },
      { id: 3, name: 'Task 3', isDone: false }
    ]
    const { getByText } = render(<List tasks={tasks} setTasks={() => {}} />)

    tasks.forEach((task) => {
      expect(getByText(`${task.name}`)).toBeInTheDocument()
    })
  })
  it('renders a message when there are no tasks', () => {
    const { getByText } = render(<List tasks={[]} setTasks={() => {}} />)
    expect(getByText('No tasks to do')).toBeInTheDocument()
  })
})

describe('<Form />', () => {
  it('renders without crashing', () => {
    render(<Form addTask={() => {}} />)
  })

  it('updates input value correctly', () => {
    const { getByRole } = render(<Form addTask={() => {}} />)
    const input = getByRole('textbox') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Task 1' } })
    expect(input.value).toBe('Task 1')
  })
})
