import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {TasksPage} from "../pages/TasksPage";
import EditTaskPage from "../pages/EditTaskPage";
import CreateTaskPage from "../pages/CreateTaskPage";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/tasks" />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/tasks/new" element={<CreateTaskPage />} />
                <Route path="/tasks/edit/:id" element={<EditTaskPage />} />
            </Routes>
        </BrowserRouter>
    )
}