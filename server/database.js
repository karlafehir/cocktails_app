import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: 3306
}).promise()

export async function registerUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );
    return result.insertId;
  }

  export async function loginUser(email, password) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];
    if (!user) {
      throw new Error('User not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Incorrect password');
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '10d', 
    });
    return { userId: user.id, token };
}

export async function getCocktails(){
    const [rows] = await pool.query(`
        SELECT * FROM cocktails`);
    return rows;
}

export async function getCocktailsCollection(){
    const [rows] = await pool.query(`
        SELECT * FROM MyCocktailCollection`);
    return rows;
}

export async function getCocktail(id){
    const [rows] = await pool.query(`
        SELECT * FROM cocktails 
        WHERE id = ?`, [id]);
    return rows;
}

export async function deleteCocktail(id){
    const [rows] = await pool.query(`
        DELETE FROM MyCocktailCollection 
        WHERE id = ?`, [id]);
    return rows;
}

export async function getCocktailByTaste(taste){
    const [rows] = await pool.query(`
        SELECT * FROM cocktails 
        WHERE taste = ?`, [taste]);
    return rows;
}

export async function getCocktailFromCollection(id){
    const [rows] = await pool.query(`
        SELECT * FROM MyCocktailCollection 
        WHERE id = ?`, [id]);
    return rows;
}

export async function createCocktail(title, taste, description, instructions, image){
    const [result] = await pool.query(
        `INSERT INTO MyCocktailCollection ( title, taste, description, instructions, image )
         VALUES (?, ?, ?, ?, ?)`, [ title, taste, description, instructions, image ]);
    return getCocktail(result.insertId);
}

const result = await getCocktailsCollection();
console.log(result);
