import pool from '../config/db.js';

export async function createTask(req, res) {
  const { name } = req.body;
  if (!name || typeof name !== 'string' || name.length > 255)
    return res.status(400).json({ error: 'Task name is required and must be <= 255 chars' });
  try {
    const [result] = await pool.query(
      'INSERT INTO tasks (userId, name) VALUES (?, ?)',
      [req.user.id, name]
    );
    res.status(201).json({ id: result.insertId, name, status: 'pending' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function getTasks(req, res) {
  let { page = 1, limit = 10, search = '' } = req.query;
  page = parseInt(page);
  limit = Math.min(parseInt(limit), 100);
  const offset = (page - 1) * limit;
  try {
    const searchSql = search ? 'AND name LIKE ?' : '';
    const params = [req.user.id];
    if (search) params.push(`%${search}%`);
    const [tasks] = await pool.query(
      `SELECT id, name, status, createdAt FROM tasks WHERE userId = ? ${searchSql} ORDER BY createdAt DESC LIMIT ? OFFSET ?`,
      search ? [...params, limit, offset] : [...params, limit, offset]
    );
    const [countRows] = await pool.query(
      `SELECT COUNT(*) as total FROM tasks WHERE userId = ? ${searchSql}`,
      search ? params : params
    );
    res.json({ tasks, total: countRows[0].total, page, limit });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function updateTaskStatus(req, res) {
  const { status } = req.body;
  if (!['pending', 'completed'].includes(status))
    return res.status(400).json({ error: 'Invalid status' });
  try {
    const [rows] = await pool.query(
      'SELECT * FROM tasks WHERE id = ? AND userId = ?',
      [req.params.id, req.user.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Task not found' });
    await pool.query('UPDATE tasks SET status = ? WHERE id = ?', [status, req.params.id]);
    res.json({ message: 'Task updated' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

export async function deleteTask(req, res) {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM tasks WHERE id = ? AND userId = ?',
      [req.params.id, req.user.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Task not found' });
    await pool.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}
