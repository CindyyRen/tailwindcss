const expreses = require('express');
// const db = require('./db/db');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const app = expreses();

const port = process.env.PORT || 3000;

app.use(expreses.json());
app.get('/', (req, res) => {
  res.send('Hello world');
});

// app.get('/jobs', async (req, res) => {
//   const sql = 'SELECT * FROM job';

//   try {
//     const [results, fields] = await db.query(sql); // Use await with promise-based query
//     res.json(results);
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({ error: 'Failed to fetch data' });
//   }
// });
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await prisma.job.findMany({
      include: { company: true },
    });
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.get('/api/example', (req, res) => {
  res.josn({ message: 'this is an example endopoint ' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
