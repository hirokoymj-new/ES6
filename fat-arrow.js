// function argument in setTimeout is annoymouse function
//ES5
// setTimeout(function(){
//     console.log("SetTimeout called")
// }, 1000);

// // ES6
// setTimeout(()=> console.log("SetTimeout called"), 1000);

//ES5
let add = function(a,b){
    return a+b;
}
// console.log(add(1,2));


// ES6
// If the body is just one statement, we can remove braces AND
// If the body is just one linem we don't need "return" - automatically returns the value 
// let add2 = (a,b) => a+b;
// console.log(add2(1,2));

// Object - 1
// let obj = {
//     name: "Asim",
//     sayLater: function() {
//         console.log(this.name);
//     }
// };
// obj.sayLater(); //Asim

// Object - 2
// 
//function call as object
// let obj = {
//     name: "Asim",
//     sayLater: function() {
//         let self = this;
//         setTimeout(function(){
//             //console.log(this.name);
//             console.log(self.name);
//         }, 1000);
//     }
// };
// obj.sayLater(); //undefine

// Object - 3 ES6
// function call as object
// fat arrow function will be the same as the value of this outside the fat arrow function
// let obj = {
//     name: "Asim",
//     sayLater: function() {
//         setTimeout(() => console.log(this.name) , 1000);
//     }
// };
// obj.sayLater();

// Fat arrpw functions are far more than just a way of writing anonymous functions.
// It also stabilises the value of this


// const getFirstName = (fullname) => fullname.split(' ')[0];
// console.log(getFirstName('Mike Smith'));

// Challenge area

// const multiplier = {
//     // numbers - array of number
//     // multiplyBy - single number
//     // multiply - returns a new array where the nubmer has been multiplied
// }

const multiplier = {
    numbers: [1,2],
    multiplyBy: 3,
    multiply(){             // 1) OK - ES6 method definition works `this` value
    //multiply: function(){   // 2) OK- ES5 function method works `this ` value
    //multiply: () => {         // 3) ERR - Do NOT use fat arrow function HERE because `this` value loose  
        const output = this.numbers.map((num) => num * this.multiplyBy);
        return output;
    }
}
console.log(multiplier.multiply()); //[3,6]

//3) this value is undefined and no longer object because this value refers its parents this value.
// multiplier's parent this value is none!


// Answer 1 
const multiplier = {
    numbers: [1,2],
    multiplyBy: 3,
    multiply(){    // ES6 Method Definition syntax - `this` value in the function refers its parents this value         
        const output = this.numbers.map((num) => num * this.multiplyBy);
        return output;
    }
}
console.log(multiplier.multiply()); //[3,6]

// Answer 2
//
const multiplier = {
    numbers: [1,2],
    multiplyBy: 3,
    multiply: function(){   // 2) `this` value of ES5 function method refers its parent `this` value
        const output = this.numbers.map((num) => num * this.multiplyBy);
        return output;
    }
}
console.log(multiplier.multiply()); //[3,6]


// Answer 3
//
const multiplier = {
    numbers: [1,2],
    multiplyBy: 3,
    multiply: () =>{   // ERROR - DO NOT USE fat arrow function HERE because it lose `this` value
        const output = this.numbers.map((num) => num * this.multiplyBy);
        return output;
    }
}
console.log(multiplier.multiply()); //ERROR