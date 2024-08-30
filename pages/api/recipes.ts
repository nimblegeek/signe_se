import { NextApiRequest, NextApiResponse } from 'next'
import { openDb } from '../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const db = await openDb();
      const { title, ingredients, instructions, scannedRecipeUrl } = req.body;
      
      const result = await db.run(
        'INSERT INTO recipes (title, ingredients, instructions, scannedRecipeUrl) VALUES (?, ?, ?, ?)',
        [title, ingredients, instructions, scannedRecipeUrl]
      );

      res.status(201).json({ id: result.lastID });
    } catch (error) {
      res.status(500).json({ error: 'Error creating recipe' });
    }
  } else if (req.method === 'GET') {
    try {
      const db = await openDb();
      const recipes = await db.all('SELECT * FROM recipes');
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching recipes' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}