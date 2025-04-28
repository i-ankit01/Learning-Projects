// Interfaces and types in typescript 

interface Person {
    name : String,
    age : number,
    greet(phrase:String) : void
}

class Employee implements Person{
    name : String;
    age : number;

    constructor (n:String, a : number){
        this.name = n;
        this.age = a
    }

    greet(phrase : String){
        console.log(phrase)
    }
}

const e = new Employee("Ankit", 19,)
console.log(e.name)
e.greet("Hello ankit")

// What is the use of interfaces why cant we define the class standalone ?
// Answer - Because it makes sure that the class Employee must contain the function greet as it will give error if you implemented the interface and didn't made greet func

// type in typescript 

type User2 = {
    name : String,
    age : number,
    greet(phrase : String) : void
}
// almost same as interfaces but cannot be used as implementations while defining a class

function printName(user : User2){
    console.log(user.name)
}
printName({
    name : "pratik",
    age : 23,
    greet(item){
        console.log(item)
    }
})

// in type you can use unions, and , intersections

type fnArgs = String | number

function fn(input : fnArgs){ // the return type of this function will be fnArgs
    return input
}

type employee = {
    name : String,
    startDate : Date
}
interface manager {
    name : String,
    department : String
}

type TechLead = employee & manager // this feature is intersection and can be done in type only
// so here TechLead will have 3 fields name , startDate , department

// What is the difference between interface and type?
// Answer = type cannot be used for class implementation whereas interfaces can be used , type has features like union , intersection , and , or



// Arrays in typescript

function maxValue (arr: number[]){
    // logic goes here
}
maxValue([1,2,3,6])


// or you can create type also for this ex -
type numberArr = number[]
function leastValue(arr:numberArr){
    // logic goes here
}
leastValue([4,2,6])

