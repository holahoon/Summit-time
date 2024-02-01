/**
 * Replace with Turso or Pocketbase
 * Remove packages:
 * @types/better-sqlite3
 * better-sqlite3
 */

import sqlite from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'

const sqliteDB = sqlite(':memory:')
export const db = drizzle(sqliteDB)
