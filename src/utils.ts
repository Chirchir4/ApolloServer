import {client} from "../database/mockdb.js"

 export const createUserTable=async () => {
    const query = `
    CREATE TABLE users (
        id int primary key,
        email varchar,
        password varchar,
        name varchar
   
    );
    `;
    try {
        const res = await client.query(query)
        console.log("Table created",res)
    } catch (error) {
        console.error(error)
    }
    
    
 }
 export const listTables=async () => {
    const query =`
    SELECT table_name
FROM information_schema.tables
WHERE table_schema='public'
ORDER BY table_name
    `
    try {
        const res = await client.query(query)
        console.log("table list",res)  
    } catch (error) {
        console.error(error)
    }
    
 }
 export const addUsers= async(id:number,name:string,email:string,password:string)=>{
    // const query ={
    //     text:'INSERT INTO users (id,name,email,password) VALUES($1,$2,$3,$4)',
    //     values:[id,name,email,password]
    // }
    const query = {
      text: 'INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      values: [id, name, email, password]
    };
    
    try {
        const res= await client.query(query)
    
        return res.rows[0];
       
    } catch (error) {
        console.error(error)
    }
   
 }
 export const getUsers= async()=>{
    const query =`
    SELECT * FROM users 
`
        
    
    try {
        const res= await client.query(query)
       
       return res.rows
    } catch (error) {
        console.error(error)
    }
 
 }
 export const updateUser = async ( id:number,name:string,email:string,password:string) => {
    // First, check if the user with the given ID exists
    const userExistsQuery = {
      text: 'SELECT * FROM users WHERE id = $1',
      values: [id],
    };
  
    const userExistsResult = await client.query(userExistsQuery);
  
    if (userExistsResult.rows.length === 0) {
      throw new Error(`User with ID ${id} not found.`);
    }
  
    // Update the user if the ID exists
    const updateQuery = {
      text: 'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4',
      values: [name, email, password, id],
    };
  
    try {
      await client.query(updateQuery);
      return {
        id,
        name: name || userExistsResult.rows[0].name,
        email: email || userExistsResult.rows[0].email,
        password: password || userExistsResult.rows[0].password,
      };
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it higher up in the call stack
    }
  };

  export const deleteUser= async(id:number,name:string,email:string,password:string)=>{
    const deleteUserQuery = {
        text: 'DELETE FROM users WHERE id = $1',
        values: [id],
      };
try {
    await client.query(deleteUserQuery)
    return { id };
    console.log("user deleted")
} catch (error) {
    console.error(error)
}
    
  }