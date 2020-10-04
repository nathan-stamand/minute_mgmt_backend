import { pool } from './pool';

class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on(
      'error',
      (err, client) => `Error, ${err}, on idle client${client}`
    );
  }

  async select(columns, clause) {
    let query = `SELECT ${columns} FROM ${this.table} `;
    if (clause) {
      query += clause;
    }
    return this.pool.query(query);
  }

  async insertWithReturn(columns, values) {
    const query = `
          INSERT INTO ${this.table}(${columns})
          VALUES (${values})
          RETURNING id, ${columns}
      `;
    return this.pool.query(query);
  }

  async updateWithReturn(valuesArr) {
    const [ id, task, time ] = valuesArr;
    const query = `
      UPDATE ${this.table}
      SET task = '${task}', time = ${time}
      WHERE id = ${id}
    `;
    return this.pool.query(query);
  }

  async delete(id, isParent = false) {
    const mainQuery = `
      DELETE FROM ${this.table}
      WHERE id = ${id}
    `;
    let secondQuery;
    if (isParent) {
      secondQuery = `
        DELETE FROM subtasks
        WHERE task_id = ${id}
      `;
    }
    this.pool.query(secondQuery);
    return this.pool.query(mainQuery);
  }
}

export default Model;
