let name = "Abdiaziz";
let age = 20;

document.write(`My name is : ${name} <br> I am ${age} years old <br>`)

// 
let Name = "Abdiaziz Maashaa";
const great = "Hello";
document.write(`${great} ${Name}`)

// selection statements
var num1 , num2 ;
num1 = 60;
num2 = 30;
if(num1 > num2)
{
    document.write(`<br> value of num1 is greaterthan num2`)

}

// loops
var counter = 0;
while(counter < 10)
{
   document.write(`<br> number ${counter}`);

   counter++;
}

for(let i = 0; i  <= 5; i++){
    document.write(` <br> number${i} `)


}

//funtions 

function Display() {
    document.write("<br> This is my funtion")
    
}
// invoke the funtion
Display();
// another example

// funtion declaration
function maxNum(number1, number2){
    var max = number1;
    if (number2 > number1 ) {

        max = number2;
        document.write(`<br> Maximal number: ${max}`)
        
    }
}

// invoke the funtion
maxNum(5,10);

// array 
let list = [23,43,3,4,2]
document.write(`<br> ${list}`)
