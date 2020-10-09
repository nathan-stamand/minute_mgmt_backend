import { pool } from '../models/pool';
import {
  insertTasks,
  dropTasksTable,
  createTasksTable
} from './queries';

export const executeQueryArray = async (arr) => new Promise((resolve) => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropTasksTable ]);
export const createTables = () => executeQueryArray([ createTasksTable ]);
export const insertIntoTables = () => executeQueryArray([ insertTasks ]);
