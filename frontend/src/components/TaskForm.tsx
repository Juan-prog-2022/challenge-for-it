import { useTasksStore } from "../store/tasks.store"
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface TaskFormProps {
    taskId?: number;
    onSuccess?: () => void;
}

interface FormData {
    title: string;
    description: string;
}

export default function TaskForm({taskId, onSuccess}: TaskFormProps) {
    const { addTask, updateTask, tasks } = useTasksStore();
    const task = taskId ?tasks.find(t => t.id === taskId) : null;
    const {register, handleSubmit, formState:{errors}} = useForm<FormData>({
        defaultValues:{
            title: task?.title ?? "",
            description: task?.description ?? ""
        },
    });

    const isEdit = Boolean(taskId);

    if (taskId && !task){
        return <p className="p-4">Cargando Tarea...</p>
    }
    
    const onSubmit = async (data: FormData) => {
        try {
            if(taskId){
            await updateTask(taskId, data);
                toast.success("Tarea actualizada con éxito");
        }else{
            await addTask(data.title, data.description);
            toast.success("Tarea creada con éxito");
        }
        onSuccess?.();
        } catch (error) {
            console.error("Error al guardar la tarea:", error);
            toast.error("Error al guardar la tarea");
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-4 bg-white rounded shadow"
        >
            <input
            type="text"
            placeholder="Título"
            className="w-full border p-2 rounded"
            {...register("title", {required:"El título es obligatorio"})}
            />
            <textarea
            placeholder="Descripción"
            className="w-full border p-2 rounded"
            {...register("description", {required:"La descripción es obligatoria"})}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            <button
             type="submit"
             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                {isEdit ? "Actualizar Tarea" : "Agregar Tarea"}
            </button>
        </form>
    )
}
