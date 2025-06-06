import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const client = new PrismaClient();

export function GET(){
    return Response.json({
        username : "ankit",
        password : "ankit@gmail.com"
    })
}

export async function POST(req : NextRequest){
    // get the data 
    const response = await req.json();
    console.log(response)
    // post it in the database
    const user = await client.user.create({
        data : {
            username : response.username,
            password : response.password
        }
    })
    console.log(user.id)
    return Response.json({
        message : "successfull"
    })
}