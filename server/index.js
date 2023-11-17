const express = require('express')
const { Pool } = require('pg')
const app = express()
const PORT = 5000

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
})

app.get('/api/historical', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT date, discharge_value FROM rivers ORDER BY date ASC'
    )
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch data' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
