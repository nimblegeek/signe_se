import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db: any = null;

async function openDb() {
  if (!db) {
    db = await open({
      filename: './recipes.sqlite',
      driver: sqlite3.Database
    });
    await db.exec(`
      CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        ingredients TEXT,
        instructions TEXT,
        scannedRecipeUrl TEXT
      )
    `);
  }
  return db;
}

export { openDb };