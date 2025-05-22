interface Viewer {
    id : string;
    name : string;
    age : number ;
    email : string ; 
    password : string
}

// function updateUserDetails (name : string, age : number , password : string) // but this generally looks bad for a function to have this much of arguments 

// function updateUserDetails(data : Viewer){ } // but the restriction is that you can only allow to update name age and password

type details = Pick<Viewer , "name" | "age" | "password">
type optionalDetails = Partial<Viewer>

function updateUserDetails(data : optionalDetails){}

// Records [These are TypeScript specific]

interface UserSample {
    id : string;
    name : string;
}

type Users = Record <string, UserSample>
const man : Users = {
    "abc3" : {id : "123", name : "ankit"},
    "dfeoi" : {id : "4dg", name : "harsh"}
}
console.log(man["abc3"])

// Map [Map also do the same thing but are js specific also]

type UserStructure = {
    name : string;
    email : string;
}

const userss = new Map<string,UserStructure>
userss.set("asd" , {name : "ankit", email : "ankit@gmail.com"});
userss.set("jfh4" , {name : "harsh", email : "harsh@gmail.com"})

console.log(userss.get("asd"))


// Exclude in Typescript
type EventType = 'click' | 'scroll' | 'hover'
type ExcludEvent = Exclude < EventType,'scroll'> // 'click' | 'hover'

const handleEvent = (event : ExcludEvent) => {
    console.log('All ok')
}
handleEvent('click') // All ok
// handleEvent('scroll') // Error
