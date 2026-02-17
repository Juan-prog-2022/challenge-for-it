import { useParams, useNavigate } from "react-router-dom"
import TaskForm from "../components/TaskForm";

export default function EditTaskPage() {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();

  if (!id){
    return <p className="p-4">Invalid task ID</p>
  }

  return (
    <TaskForm 
      taskId={Number(id)}
      onSuccess={() => navigate('/tasks')}
    />
  )
}
