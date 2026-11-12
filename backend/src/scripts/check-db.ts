
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

// Obtain the pooled database connection string
const connectionString = process.env.DATABASE_URL_POOLED;

// Check if the connection string exists, if not, throw an error
if (!connectionString) {
  throw new Error('DATABASE_URL_POOLED is not defined');
}

// Initialize the Neon SQL query function
const sql = neon(connectionString);
/* neon() method does not maintain a persistent connection,
there is no need to close it manually */

// Execute a simple query to check the database connection
try {
  const result = await sql`
    SELECT current_database() AS database,
           1 AS connection_test
  `;

  // Show results
  console.log('Database connection successful');
  console.log(result);

  // Handle errors
} catch (error) {
  console.error('Database connection failed:', error);
  process.exitCode = 1;
}
