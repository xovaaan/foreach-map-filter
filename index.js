var numbers = [10,20,30,40];
var squareNumber = [];
numbers.forEach(function(x){
    squareNumber.push(x*x);
})
console.log(squareNumber);

var numbers = [20,40,60,80];
var squareNumber = numbers.map(function(x){//in map you dont have to put single squareNumber//
    return (x*x);
})
console.log(squareNumber);

var newNumber = [20,10,5,4,2,7,80,60];
var squareNumber = newNumber.filter(function(x){//filter can be used to filtering values//
    return (x<10);
})
console.log(squareNumber);