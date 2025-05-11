// Write a function to create the "users" table in the database

import { Client } from "pg";

const client = new Client({
    connectionString : "postgresql://neondb_owner:npg_hkJBKfzA8e0g@ep-lively-voice-a4m6gsyz-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
})

// client.connect()

async function createUsersTalble(){
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `)
    console.log(result)
}

createUsersTalble()

// Now create a funtion to insert the data into this table 

async function inserDatainUsers(){
    await client.connect();
    const result = await client.query(`
        INSER INTO users(username , email , password)
        VALUES 
        `)
    console.log(result)
}

inserDatainUsers()