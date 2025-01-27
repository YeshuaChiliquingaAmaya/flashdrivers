const db = require('../db/connection');

exports.createFlashDrive = async (req, res) => {
  const { brand, model, capacity, is_new, price } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO flashdrives (brand, model, capacity, is_new, price) VALUES (?, ?, ?, ?, ?)',
      [brand, model, capacity, is_new, price]
    );
    res.status(201).json({ id: result.insertId, brand, model, capacity, is_new, price });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllFlashDrives = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM flashdrives');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFlashDriveById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM flashdrives WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Flash drive not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateFlashDrive = async (req, res) => {
  const { brand, model, capacity, is_new, price } = req.body;
  try {
    await db.query(
      'UPDATE flashdrives SET brand = ?, model = ?, capacity = ?, is_new = ?, price = ? WHERE id = ?',
      [brand, model, capacity, is_new, price, req.params.id]
    );
    res.json({ message: 'Flash drive updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFlashDrive = async (req, res) => {
  try {
    await db.query('DELETE FROM flashdrives WHERE id = ?', [req.params.id]);
    res.json({ message: 'Flash drive deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
