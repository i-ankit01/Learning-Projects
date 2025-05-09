// example 
type gameArgs = "up" | "down" | 'left' | "right"

function game(movement : gameArgs){
    if(movement == "up"){
        // logic goes here 
    }
}

game("up")
// you can totally use it like this but we use enums for better readability 

// Usage of enums

enum Movement {
    Up,
    Down,
    Left,
    Right
}
function gameMovement(moves : Movement){
    if(moves == Movement.Up){
        // logic goes here 
    }
}
gameMovement(Movement.Down)

// Now you can also define enums like this 
// enum Movement{   // default values are 0,1,2,3
//     Up = 'up',  
//     Down = 'down',
//     Left = 'left',
//     Right = 'right'

// }
