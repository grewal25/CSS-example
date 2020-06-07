const speak = function(name){
    console.log(`good day${name}`)
}
speak(name = ' saran')


//arrow function 

// const calcArea = function(radius) {
//     return 3.14*radius**2;
// }

//arrow function
//calling name, parameter and then return statement
const calcArea = radius => 3.14*radius**2;

let area = calcArea(5)
console.log(area)

// const calcArea = (radius,no) => 3.14*radius**2*no;

// let area = calcArea(5,2)
// console.log(area)

let people = ['mario','shaun','ryu']

// people.forEach(function(person){
//     console.log(person);
// });

people.forEach(person =>{
    console.log(person);
});