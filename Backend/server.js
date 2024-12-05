import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import Web3 from 'web3';
import cors from 'cors';

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Use CORS middleware
app.use(cors({
  origin: '*', // Allow all origins for development
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'fitflow_gym'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Create users table if it doesn't exist
const createUserTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  dob DATE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  height INT,
  weight INT,
  numberOfSession INT,
  objectif VARCHAR(255),
  image TEXT,
  sexe VARCHAR(10)
);
`;

db.query(createUserTableQuery, (err, result) => {
  if (err) {
    console.error('Error creating users table:', err);
  } else {
    console.log('Users table ensured.');
  }
});

// Initialize Web3
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Registration route
app.post('/register', (req, res) => {
  console.log('Registration request received:', req.body);

  const { username, dob, email, password, height, weight, numberOfSession, objectif, sexe, image } = req.body;

  if (!username || !email || !password) {
    console.error('Validation error: Missing required fields');
    return res.status(400).json({ status: 'error', message: 'Missing required fields' });
  }

  console.log('Received registration data:', req.body);

  // Check if email already exists
  const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ status: 'error', message: 'Database error occurred. Please try again later.' });
    }

    if (results.length > 0) {
      return res.status(409).json({ status: 'error', message: 'Email already registered' });
    }

    const hashedPassword = password; // Replace with actual hashing logic

    console.log('Inserting user data:', { username, dob, email, hashedPassword, height, weight, numberOfSession, objectif, sexe, image });

    const insertUserQuery = 'INSERT INTO users (username, dob, email, password, height, weight, numberOfSession, objectif, sexe, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(insertUserQuery, [username, dob, email, hashedPassword, height, weight, numberOfSession, objectif, sexe, image], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ status: 'error', message: 'Database error occurred. Please try again later.' });
      }
      console.log('User registered successfully:', result);
      res.status(201).json({ status: 'success', message: 'User registered successfully' });
    });
  });
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ status: 'error', message: 'Email and password are required' });
  }

  // Check if user exists
  const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkUserQuery, [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ status: 'error', message: 'Database error occurred. Please try again later.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ status: 'error', message: 'Invalid email or password' });
    }

    const user = results[0];

    // Verify password (replace with actual password verification logic)
    if (user.password !== password) {
      return res.status(401).json({ status: 'error', message: 'Invalid email or password' });
    }

    res.status(200).json({ status: 'success', message: 'Login successful', user: { id: user.id, email: user.email } });
  });
});

// Account route
app.get('/account', (req, res) => {
  const email = req.query.email; // Assume email is passed as a query parameter

  const getUserQuery = 'SELECT username, dob, email, height, weight, numberOfSession, objectif, image, sexe FROM users WHERE email = ?';
  db.query(getUserQuery, [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ status: 'error', message: 'Database error occurred. Please try again later.' });
    }

    if (results.length === 0) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    res.status(200).json(results[0]);
  });
});

// NLP interaction example
app.post('/generate-plan', async (req, res) => {
  const { userPreferences } = req.body;

  try {
    const response = await fetch('https://nlp-model-api.com/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ preferences: userPreferences })
    });

    const plan = await response.json();
    res.status(200).json({ status: 'success', plan });
  } catch (error) {
    console.error('NLP Model Error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to generate plan' });
  }
});

// NLP module for exercise recommendations
const getExerciseRecommendations = (userData) => {
  const { age, weight, objectif } = userData;
  const exercises = [];

  // Example rule-based logic
  if (objectif === 'Loose weight') {
    exercises.push({ name: 'Running', description: 'A cardio exercise to burn calories' });
    exercises.push({ name: 'Jumping Jacks', description: 'A full-body cardio exercise' });
  }

  if (weight > 80) {
    exercises.push({ name: 'Swimming', description: 'A low-impact exercise for heavier individuals' });
  }

  if (age < 30) {
    exercises.push({ name: 'HIIT', description: 'High-Intensity Interval Training for young individuals' });
  }

  return exercises;
};

// Endpoint for fetching exercise recommendations
app.get('/exercises', (req, res) => {
  const email = req.query.email;

  const getUserQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(getUserQuery, [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ status: 'error', message: 'Database error occurred. Please try again later.' });
    }
    if (results.length === 0) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    const userData = results[0];
    const exercises = getExerciseRecommendations({ age: Math.floor((new Date() - new Date(userData.dob)) / (1000 * 60 * 60 * 24 * 365)), weight: userData.weight, objectif: userData.objectif });
    res.json({ status: 'success', exercises });
  });
});

// Blockchain interaction example
app.post('/blockchain-interaction', async (req, res) => {
  const { data } = req.body;

  try {
    // Example blockchain transaction
    const transaction = await web3.eth.sendTransaction({
      from: '0xYourAddress',
      to: '0xRecipientAddress',
      value: web3.utils.toWei('0.1', 'ether'),
      data: web3.utils.toHex(data)
    });

    res.status(200).json({ status: 'success', transaction });
  } catch (error) {
    console.error('Blockchain Error:', error);
    res.status(500).json({ status: 'error', message: 'Blockchain interaction failed' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
