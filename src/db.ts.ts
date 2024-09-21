import { Pool } from 'pg';

const pool = new Pool({
    user: 'your_username',
    host: 'your_server_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432, // Default PostgreSQL port
});

export default pool;
