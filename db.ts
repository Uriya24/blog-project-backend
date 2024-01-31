import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    ssl: true,
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASS,
    port: parseInt(process.env.POSTGRES_PORT!),
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