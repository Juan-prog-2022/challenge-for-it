import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';


const server = express();

server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

server.use(express.json());

server.use('/api/tasks', taskRoutes);

export default server;