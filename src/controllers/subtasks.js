import Model from '../models/model';

const subTasksModel = new Model('subtasks');

export const subTasksPage = async (req, res) => {
  try {
    const data = await subTasksModel.select(
      'id, task, time, complete, task_id'
    );
    res.status(200).json({ subtasks: data.rows });
  } catch (err) {
    res.status(200).json({ message: err.stack });
  }
};

export const addSubTask = async (req, res) => {
  const { task, time } = req.body;
  const columns = 'task, time';
  const values = `'${task}', '${time}'`;
  try {
    const data = await subTasksModel.insertWithReturn(columns, values);
    res.status(200).json({ subtasks: data.rows });
  } catch (err) {
    res.status(200).json({ message: err.stack });
  }
};

export const deleteSubTask = async (req, res) => {
  const { id } = req.body;
  try {
    subTasksModel.delete(id);
    res.status(200).json({ message: `Subtask #${id} was deleted.` });
  } catch (err) {
    res.status(200).json({ message: err.stack });
  }
};

export const updateSubTask = async (req, res) => {
  const valuesArray = Object.values(req.body);
  try {
    await subTasksModel.updateWithReturn(valuesArray);
    res.status(200).json({ task: req.body });
  } catch (err) {
    res.status(200).json({ message: err.stack });
  }
};
