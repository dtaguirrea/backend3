import express from 'express';
import { generateMockUsers, generateData } from '../services/mocks.service.js';

const router = express.Router();

router.get('/mockingusers', async (req, res) => {
  try {
    const users = await generateMockUsers(50);  
    res.status(200).json({ message: '50 mock users generated', users });
  } catch (error) {
    console.error("Error generating mock users:", error);
    res.status(500).json({ message: 'Failed to generate mock users', error });
  }
});

router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;  

  try {
    const result = await generateData(users, pets);
    res.status(201).json({
      message: `Generated ${users} users and ${pets} pets successfully`,
      result,
    });
  } catch (error) {
    console.error("Error generating data:", error);
    res.status(500).json({ message: 'Failed to generate data', error });
  }
});

export default router;
