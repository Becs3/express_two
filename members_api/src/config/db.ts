import dotenv from "dotenv"
dotenv.config()

import mysql from "mysql2/promise"
export const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || "3306")
})

export const connectDB = async ()=> {
    try {
        await db.getConnection();
        console.log("connected to database")
    } catch(error) {
        console.log("error connecting to database" + error)
    }
}