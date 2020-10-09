export const createTasksTable = `
DROP TABLE IF EXISTS tasks;
CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  task VARCHAR(255) NOT NULL,
  time INT DEFAULT '0',
  complete BOOL NOT NULL DEFAULT '0'
  );
  `;

export const insertTasks = `
INSERT INTO tasks(id, task, time, complete)
VALUES ('1', 'Hygiene Routine', '15', '0'),
      ('2', 'Exercise Routine', '30', '1');
`;

export const dropTasksTable = 'DELETE FROM tasks';
