import express from 'express';
import {
  addSubTask,
  addTask,
  indexPage,
  subTasksPage,
  tasksPage,
  deleteTask
} from '../controllers';

const indexRouter = express.Router();
indexRouter.get('/', indexPage);
indexRouter.get('/tasks', tasksPage);
indexRouter.post('/tasks', addTask);
indexRouter.delete('/tasks/:id', deleteTask);
indexRouter.get('/subtasks', subTasksPage);
indexRouter.post('/subtasks', addSubTask);

export default indexRouter;
