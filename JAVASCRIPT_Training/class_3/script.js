// "use strict";
// z = 98;
// // debugger;
// // let a = 10;
// // const c = 15;

// // console.log(b)

// // var b = 13;

// // printValue(2, 3);
// // console.log(printValue)

// // function printValue(a, b) {
// //     console.log(x)
// //     let x = 62;
// //     console.log("i am massege", a, b);
// // }

// // console.log(printValue);
// // printValue();

// // scoping

// // debugger;


// // let y = 10;
// // const x = 5;
// // var z = 11;

// // console.log(x,y,z);

// // a = 922;

// {
//     let y = 45;
//     const x = 78;
//     // var z = 96;
//     // console.log(x, y,z)
// }
// // console.log(z)

// functionOne();

// function functionOne() {
//     // let y = 10;
//     // const x = 5;
//     // var z = 11;

//     {
//         // let y = 4884;
//         // const x = 288;
//         // var z = 34;
//         // console.log(x, y,z)
//     }
//         console.log(z)


// }

//loops

// for (let i = 1; i <= 400; i++) {
//     console.log("Rohan")
// }

// let j = 401;
// do {
//     console.log("Rohan")
//     j++;
// } while (j <= 400)

//Functions

// //simple function
// function funcOne() {
//     console.log("first case");
// }
// funcOne()

// //parametized and return any value function
// function add(a, b) {
//     console.log(a + b);
//     return a - b;
// }
// let ret = add(12, 23);
// console.log(ret)

// //without parameter and with argument
// function funcTwo() {
//     console.log("second case");
// }
// funcTwo(12,23)

// //without argument and with parameter
// function funcTwo_One(a,b) {
//     console.log(a,b); //undefined undefined
// }
// funcTwo_One() //not passing argument

// //impure function
// let x = 0;
// function funcThree() {
//     console.log(x++)
// }
// funcThree()
// funcThree()

// //pure function
// function funcFour(x) {
//     console.log("Rohan",x)
// }
// funcFour(12)
// funcFour(12)

// //Annoymous Function
// let funcFive = function () {
//     console.log("Annoymous Function")
// }
// ();

// //IIFE - Imedietly Invoked Function Expression
// (function () {
//     console.log("I am IIFE")
// })();


// // Arrow fucntion example
// let Arrow_container = () => 2 + 3
// console.log(Arrow_container())


// // callback fucntion 
// function callback(){
//     console.log("I am a callback fucntion")
// }

// function HOC(samosa){
//     samosa()  // sa
//     //samosa --> new name of callback function
// }

// HOC(callback)  // callback - name of a fuction is passed.

// myFunc();

// function myFunc() {
//     console.log("I am IIFE Bo   rder")
//     (function () {
//         console.log("I am IIFE")
//     })();
// }


// function printEven(){
//     for(let i =0; i<=10; i++){
//         if(i % 2 == 0){
//             console.log("Even" ,i);
//         }else{
//             console.log("Odd", i);
//         }
//     }
// }

// printEven()

function printTable(num){
    for(let i =1; i<=10; i++){
        console.log(`${num}* ${i} =${num*i}`)
    }
}
// printTable()

function printTable_1_to_10(){
    for(let i =2; i<=10; i++){
        printTable(i)
    }

}
printTable_1_to_10()



