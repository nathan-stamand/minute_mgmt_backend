import { pool } from '../models/pool';
import {
  insertTasksSubtasks,
  dropTasksSubtasksTables,
  createTasksSubtasksTables,
} from './queries';

export const executeQueryArray = async (arr) => new Promise((resolve) => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropTasksSubtasksTables ]);
export const createTables = () => executeQueryArray([ createTasksSubtasksTables ]);
export const insertIntoTables = () => executeQueryArray([ insertTasksSubtasks ]);
