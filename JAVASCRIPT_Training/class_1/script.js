// --------keywords----
// var , let , const -- 3 ways to create 

// var num = 2

// Arithmetic operator
console.log
(
    typeof
    (
        2
         + 
         3
        )
    )
    ;

console.log(typeof(2 * 3));
console.log(typeof(2 / 3));
console.log(typeof(2 ** 3));
console.log(typeof(2 % 3));
console.log(typeof(2 - 3));
console.log(typeof(2 ** 3));

let x = "name"
console.log(typeof(x))


// -----comparison operator
let a = 2
if(a < 5){
    console.log("a is less then 5")
}

console.log(5 == 5)
console.log(5 == "5")
console.log(5 === "5")
console.log(5 <= 5)
console.log(7 > 5)
console.log(8 >= 5)
console.log(8 != 5)

// ternary operator
let result = 2 > 3 ? 2 : 3
console.log(result)


// logical operator
// && aur ||
let a1 = true
let b1 = true
console.log( a1 && b1 ) 

let a2 = true
let b2 = false
console.log(a1 || b2)


// Bitwise operator

let A = 5
let B = 3
let r = A & B
console.log(r)   // o/p :- 1

// Bitwise or
let h1 = 5
let h2 = 3
console.log(h1 | h2)  // 7

// Bitwise XOR

let u1 = 5   //0101
let u2 = 3    //0011
console.log(u1 ^ u2) // o/p 6





