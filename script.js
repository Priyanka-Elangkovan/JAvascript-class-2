/*
console.log(12)

console.log(typeof 12)

var abs = "Hard"
console.log(typeof abs)

console.log(`Your abs looks very much ${abs}`) 


const data = prompt("enter data", Number)
console.log(`The value enterd will be ${data} and the data type is ` + typeof(data))

/*
const data = Number(prompt("enter data"))
console.log(`The value enterd will be ${data} and the data type is ` + typeof(data))
*/
// Function
'use strict';

/*
function King() {
    console.log("Hi I am new here")
}


//let private = 10;
King();
King();
King();

function fruitProccessor (NoOfApples, NoOfIce){
    console.log('We have got your order');
    const Juice = `Drinks with ${NoOfApples} apples and ${NoOfIce} of Ice cubes in it`
    return Juice;
}

console.log(fruitProccessor(3,1));
*/
/*
function CalcAge (BrithYear){
    return 2024-BrithYear;
}

var Age1 = CalcAge(1994);

const NamedCalcAge = function calc(Birth){
    return 2024-Birth;
}

var Age2 = NamedCalcAge(1991);

console.log(`Age for the first birth year is ${Age1} and next one is of ${Age2}`);
*/
//Arrow Function
/*
const age1 = birth => 2024-birth;

const age3 = age1(1991)
console.log(age3)

const F1 = (birth, Name) =>{
    var agee = 2024-birth
    var retire = 60-agee
    return (`${Name} retires in ${retire} years`)
}

console.log(F1(1994, "Priyanka"));
*/
//==============================================================================================
//Array
/*
const a1 = ["line", "curve", "triangle", "slanted"];
console.log(a1);
console.log(a1[0], a1[a1.length-1], a1.lastIndexOf("curve"));

console.log(a1.fill("idea",1,2));

console.log(a1.pop());
console.log(a1);

const dim = {
    firstName: "Priyanka",
    lastName: "High",
    Date: [29,"Jan", 1990],
    Place: "London"
}

console.log(dim.Date[0]);

const dim1 = {
    firstName: "Priyanka",
    lastName: "High",
    Date: [29,"Jan", 1990],
    Place: "London"

    var calcag = function(){
        var result = 2024-this.Date[2];
        console.log(result);

    }

}

dim.calcag();
*/


//Calculate the temperature amplitude using the temperatures array which has the day's value on temperature and also along with few error


const temperature =[3,-2,-6,-1,'error',9 ,3,17,15,14,9,5];

console.log(temperature);

var mini;
var maxi;

mini=maxi=temperature[0];
console.log(mini);

for (let index = 1; index < temperature.length; index++) {
    if (Number(temperature[index])){
        if(mini>temperature[index]){
            mini=temperature[index];
        }
        if(maxi<temperature[index]){
            maxi=temperature[index];
        }
    }
    
}

console.log(`the minimum and maximum value found out to be ${mini} and ${maxi}`)

const CalcAmp = function(mi,ma){
    return ma - mi;
}
console.log(CalcAmp(mini,maxi));