export const createTasksSubtasksTables = `
DROP TABLE IF EXISTS subtasks, tasks;
CREATE TABLE IF NOT EXISTS tasks (
  task_id SERIAL PRIMARY KEY,
  task VARCHAR(255) NOT NULL,
  time INT DEFAULT '0',
  complete BOOL NOT NULL DEFAULT '0'
  );
  CREATE TABLE IF NOT EXISTS subtasks (
    subtask_id SERIAL PRIMARY KEY,
    s_task VARCHAR(255) NOT NULL,
    s_time INT DEFAULT '0',
    s_complete BOOL NOT NULL DEFAULT '0',
    s_task_id INT,
    FOREIGN KEY (s_task_id) REFERENCES tasks(task_id)
    );
  `;

export const insertTasksSubtasks = `
INSERT INTO tasks(task_id, task, time, complete)
VALUES ('1', 'Hygiene Routine', '15', '0'),
      ('2', 'Exercise Routine', '30', '1');
INSERT INTO subtasks(subtask_id, s_task, s_time, s_complete, s_task_id)
VALUES ('1', 'Brush teeth', '1', '0', '1'),
        ('2', 'Wash face', '1', '1', '1'),
        ('3', 'Shower', '10', '0', '1')
`;

export const dropTasksSubtasksTables = 'DELETE FROM subtasks; DELETE FROM tasks';
