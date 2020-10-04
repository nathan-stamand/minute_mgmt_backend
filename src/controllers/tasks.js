import Model from '../models/model';

const tasksModel = new Model('tasks');

export const tasksPage = async (req, res) => {
  try {
    const data = await tasksModel.select('task_id, task, time, complete');
    res.status(200).json({ tasks: data.rows });
  } catch (err) {
    res.status(200).json({ message: err.stack });
  }
};

export const addTask = async (req, res) => {
  const { task, time } = req.body;
  const columns = 'task, time';
  const values = `'${task}', '${time}'`;
  try {
    const data = await tasksModel.insertWithReturn(columns, values);
    res.status(200).json({ tasks: data.rows });
  } catch (err) {
    res.status(200).json({ message: err.stack });
  }
};
