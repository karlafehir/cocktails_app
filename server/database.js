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


export async function getCocktails(){
    const [rows] = await pool.query(`
        SELECT * FROM cocktails`);
    return rows;
}

export async function getCocktail(id){
    const [rows] = await pool.query(`
        SELECT * FROM cocktails 
        WHERE id = ?`, [id]);
    return rows;
}

export async function getCocktailByTaste(taste){
    const [rows] = await pool.query(`
        SELECT * FROM cocktails 
        WHERE taste = ?`, [taste]);
    return rows;
}

export async function createCocktail(title, taste, description, instructions){
    const [result] = await pool.query(
        `INSERT INTO cocktails ( title, taste, description, instructions )
         VALUES (?, ?, ?, ?)`, [ title, taste, description, instructions ]);
    return getCocktail(result.insertId);
}


const result = await getCocktails();
console.log(result);
