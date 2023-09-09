import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: 3306
}).promise()


export async function getRecipes(){
    const [rows] = await pool.query(`
        SELECT * FROM recipes`);
    return rows;
}

export async function getRecipe(id){
    const [rows] = await pool.query(`
        SELECT * FROM recipes 
        WHERE id = ?`, [id]);
    return rows;
}

export async function createRecipe(title, description, instructions, time){
    const [result] = await pool.query(
        `INSERT INTO recipes ( title, description, instructions, time )
         VALUES (?, ?, ?, ?)`, [ title, description, instructions, time ]);
    return getRecipe(result.insertId);
}


const result = await getRecipes();
console.log(result);
