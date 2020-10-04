import express from 'express';
import { indexPage, subTasksPage, tasksPage } from '../controllers';

const indexRouter = express.Router();
indexRouter.get('/', indexPage);
indexRouter.get('/tasks', tasksPage);
indexRouter.get('/subtasks', subTasksPage);

export default indexRouter;
