import express from 'express';
import {
  addSubTask,
  addTask,
  indexPage,
  subTasksPage,
  tasksPage,
  updateTask,
  deleteTask,
  deleteSubTask,
  updateSubTask
} from '../controllers';

const indexRouter = express.Router();
indexRouter.get('/', indexPage);

indexRouter.get('/tasks', tasksPage);
indexRouter.post('/tasks', addTask);
indexRouter.patch('/tasks/:id', updateTask);
indexRouter.delete('/tasks/:id', deleteTask);

indexRouter.get('/subtasks', subTasksPage);
indexRouter.post('/subtasks', addSubTask);
indexRouter.patch('/subtasks/:id', updateSubTask);
indexRouter.delete('/subtasks/:id', deleteSubTask);

export default indexRouter;
