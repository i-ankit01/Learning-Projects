// declaration of a variable 
const x: number = 21; // we need to specify the data type (number here) as TS is a strongly typed language 
console.log(x)

// Note - TypeScript does not run in your browser directly it changes back to javascript and then compiled and run in you browser
// to convert the ts file to js do -> tsc -b

function sum (a:number, b:number) : number{
    return a + b;
}
let value = sum(45,4);
console.log(value)

function greet(name: String) : void{
    console.log("hello " + name )
}
greet("ankit")


// Make a function that calls another function after 1sec
function runAfter1s(fn:() => void){
    setTimeout(fn , 1000)
}
runAfter1s(function (){
    console.log("Hey Ankit how are you after 1sec")
})

const y : any = "Ankit"

// Few things you need to know from tsconfig.json
// target, rootDir, outDir, removeComments, noImplicitAny


// Intefaces in typescript 

function isAdult(user : {
    firstName : String,
    lastName : String,
    age : number
}){
    if(user.age > 18) {
        console.log("user is adult")
    }
    else {
        console.log("user is not adult")
    }
}

let user = {
    firstName : "ankit",
    lastName : "kumar",
    age : 19
}

isAdult(user)

// so instead of that we can use interfaces to support DRY 

interface UserBody  {
    firstName : string,
    lastName : string,
    age : number,
    email? : string // optional field 
}

// now you can use this interface to define the data type 
function canDrive(user : UserBody){
    if(user.age>20) console.log("User can drive")
    else console.log("User cannot drive")
}
canDrive(user)
