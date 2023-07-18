 export const users =
    [
        {
          name: 'Kate Chopin',
          email: 'kate@gmail.com',
          job:'finance',
          project:[{title:'econ'}]
        },
        {
            name: 'Paul Pin',
            email: 'ppin@gmail.com',
            job:'IT',
            project:[{title:'cosc'}]
        },
      ];
  
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
