//document.getElementById("count-el").innerText = 5

// console.log(count)
// let count = 0

// let countEl = document.getElementById("count-el")
// console.log(countEl)
// let count = 0
// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

console.log(saveEl)

function increment() {
    count = count + 1
    countEl.textContent = count
    ///same thing with innerText that was previously here
}

function save() {
    let countStr = count + " - "
    //we changed innerText to textContent cos
    //innertext was hiding the space since 
    //its not a human readable character
    saveEl.textContent += countStr 
    //putting just = 
    //will replace the the previous entries text with the -saved
    //which is why we used += instead
    countEl.textContent = 0
    count = 0

    //console.log( count);
}




// let welcomeEl = document.getElementById("welcome-el")
// let myName = "Confyy"
// let greeting = "Welcome back!"
// welcomeEl.innerText = greeting + myName







// let firstBatch =10
// undefined
// let count=firstBatch
// VM783:1 Uncaught SyntaxError: Identifier 'count' has already been declared
// let work=firstBatch
// undefined
// console.log(work)
// VM877:1 10
// undefined
// let secondBatch=25
// undefined
// let work=firstBatch+secondBatch
// undefined
// console.log(work)
// VM1062:1 35
// undefined


// let MyAge=25
// undefined
// let humanDogRatio=MyAge*7
// undefined
//  let HumandogRatio=MyAge:7
// VM1240:1 Uncaught SyntaxError: Unexpected token ':'
// let HumandogRatio=7
// undefined
// let myDogAge=MyAge*HumandogRatio
// undefined
// console.log(myDogAge)
// VM1425:1 175
// undefined


// function increment() {
//     console.log("button was clicked")
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// function Loveworld() {
//     console.log(42)
// }
// Loveworld()

//     let lap1=34
//     let lap2=33
//     let lap3=36
// function totalLaptime() {
//     console.log(lap1+lap2+lap3)

//     totalLaptime()
// }

// let lapsCompleted=0
// lapsCompleted=lapsCompleted+1
//     function Completed(){
//       console.log(Completed)
//     }

// let username = "Confyy"
// console.log(username)
// let message = "You have three new notifications"
// console.log(message + "," + username + "!")
//   or 
// let username = "Confyy"
// let message= "You have three new notifications"
// let messageToUser = message + "," + username + "!"
// console.log(messageToUser)

// let yourName = 42
// let yourGreeting = "Hi, My Name is "
// let myGreeting = yourGreeting + yourName + "!"
// console.log(myGreeting)


// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints
// console.log(totalPoints)