const express = require("express");
const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Set up PostgreSQL connection pool
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

app.use(express.json());  // For parsing application/json

// Simple route for testing
app.get("/", (req, res) => {
  res.send("Backend is working");
});

/* Route to handle volunteer signups
app.post("/signup", async (req, res) => {
  const { name, email, role } = req.body;

  const query = "INSERT INTO volunteers (name, email, role) VALUES ($1, $2, $3)";
  try {
    await pool.query(query, [name, email, role]);
    res.status(201).send("Volunteer signed up successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error signing up volunteer");
  }
}); */

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
