  
import pkg from 'pg';
const { Client } = pkg;
import dotenv from'dotenv'
dotenv.config()

 export const client=new Client({
  database: process.env.DB_NAME,
  user:  process.env.DB_USER,
  host: process.env.DB_HOST,
  password:  process.env.DB_PASSWORD,
  port:  process.env.DB_PORT,

})
client.connect()
  .then(() => console.log('Database connected'))
  .catch(error => console.error('Error connecting to the database:', error));

