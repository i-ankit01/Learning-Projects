import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Function for inserting an user in the User table 
async function insertUser (email : string, firstName : string , lastName : string , password : string){
    const res = await prisma.user.create({
        data : {
            email,
            firstName,
            lastName,
            password
        }
    })
    console.log("user inserted: " , res)
}

insertUser('Aryan@gmail.com', 'Aryan', "Sharma", "secret")


// Function for updating the details of user in the User table 
interface UpdateParams {
    firstName : string,
    lastName : string
}
async function updateUser(email : string , {firstName , lastName}: UpdateParams){
    const res = await prisma.user.update({
        where : {email : email},
        data : {firstName : firstName , lastName : lastName}
    })
    console.log(res)
}

updateUser("ankit@gmail.com", {firstName : "ankitUpdated", lastName : "kumar"})