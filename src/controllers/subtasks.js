import Model from '../models/model';

const subTasksModel = new Model('subtasks');

export const subTasksPage = async (req, res) => {
  try {
    const data = await subTasksModel.select(
      'subtask_id, s_task, s_time, s_complete, s_task_id'
    );
    res.status(200).json({ tasks: data.rows });
  } catch (err) {
    res.status(200).json({ message: err.stack });
  }
};

export const addSubTask = async (req, res) => {
  const { task, time } = req.body;
  const columns = 's_task, s_time';
  const values = `'${task}', '${time}'`;
  try {
    const data = await subTasksModel.insertWithReturn(columns, values);
    res.status(200).json({ tasks: data.rows });
  } catch (err) {
    res.status(200).json({ message: err.stack });
  }
};
