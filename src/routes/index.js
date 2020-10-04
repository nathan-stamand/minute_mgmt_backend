import express from 'express';
import {
  addSubTask,
  addTask,
  indexPage,
  subTasksPage,
  tasksPage,
  deleteTask,
  deleteSubTask
} from '../controllers';

const indexRouter = express.Router();
indexRouter.get('/', indexPage);

indexRouter.get('/tasks', tasksPage);
indexRouter.post('/tasks', addTask);
indexRouter.delete('/tasks/:id', deleteTask);

indexRouter.get('/subtasks', subTasksPage);
indexRouter.post('/subtasks', addSubTask);
indexRouter.delete('/subtasks/:id', deleteSubTask);

export default indexRouter;
