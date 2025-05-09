// Need of generics example - 

function printOutput(arg : String | number){
    return arg;
}

let value1 = printOutput(1)
let value2 = printOutput("Ankit") 
// here in both the cases value1 and value2 
// TS cannot understand the datatype of both depending on the input that are passed 
// its still consider the datatype of both the variables as String | number 
// which prevent you from using datatype specific properties like .toUpperCase() for strings

// Using generics

function printGivenData<T>(args : T){
    return args
}

let output1 = printGivenData<boolean>(true)
let output2 = printGivenData<String>("Ankit") // datatype of output2 here is String


// Another example -
function getFirstElement <T> (arr: T[]): T{
    return arr[0]
}
let ele1 = getFirstElement(["Ankit", "Harsh"]) // This will also work you dont need to specify <string> explicitly
let ele2 = getFirstElement<number>([1,2,4]) // ele2 -> number
console.log(ele1.toUpperCase()) // now you can call datatype specific functions

