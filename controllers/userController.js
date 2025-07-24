const pool = require('../config/db');

async function getProfile(req, res) {
  try {
    const [rows] = await pool.query('SELECT name, email FROM users WHERE id = ?', [req.user.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  getProfile
};