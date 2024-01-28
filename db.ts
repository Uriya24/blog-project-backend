import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'blog',
    password: process.env.POSTGRES_PASS,
    port: 5432,
});

// async function connect() {
//     try {
//         await pool.connect();
//         console.log('Connected to PostgresSQL');
//     } catch(error) {
//         console.log('Error connecting to PostgresSQL:', error);
//     }
// }
// connect();
//
// export function getPool(): Pool{
//     return pool;
// }
export default pool;