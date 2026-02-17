import { useNavigate } from 'react-router-dom'
import TaskForm  from '../components/TaskForm';

export default function CreateTaskPage() {
  const navigate = useNavigate();

  return (
    <TaskForm
      onSuccess={() => navigate('/tasks')}
    />
  )
}
