// this keyword -
//this keyword by default window object ko refer karta hai

//case 1
// console.log(this); //window object

//case 2
// function getUser() {
//     console.log(this);  //window object
// }
// getUser();

//case 3
// new getUser(); //empty object

//case 4
// let obj1 = {
//     age: 23,
//     fname: "virendra",
//     data: function () {
//         console.log(this);  //obj1 object
//     }
// }

// obj1.data();


//case 5
// let obj3 = {
//     age: 23,
//     fname: "virendra",
//     data: function () {
//         function ekOrFun() {
//             console.log(this);  //window object
//         }
//         ekOrFun();
//     }
// }

// obj3.data();


//case 6
// const arrowFun = () => {
//     console.log(this); //window object
// }
// arrowFun();


//case 7
// let obj2 = {
//     age: 23,
//     fname: "virendra",
//     data: () => {
//         console.log(this); //window object
//     }
// }

// obj2.data();


//case 8
// let obj = {
//     age: 23,
//     fname: "virendra",
//     data: function () {
//         const dataInner = () => {
//             console.log(this);  //obj object
//         }
//         dataInner()
//     }
// }

// obj.data();


//case 9
// function kuchBhi() {
//     const dataInner = () => {
//         console.log(this);  //window object
//     }
//     dataInner()
// }

// kuchBhi()



// Shallow copy-> when You make the changes in copy object change the orginal object

const object1 = {
    userName: "XYX",
    age: 21,
    city: {
        pincode: 483334
    }
}


// console.log("Orignal object can Crud on it", object1)

// const object2 = object1;//1st way of shallow copy 
// const object2 = Object.assign(object1);//2nd way of shallow copy 
// // console.log("Duplicate object",object2)

// object2.age = 26;
// object2.city.pincode=452011;
// console.log("I made change by duplicate, orignal change ho gya hai", object1)
// console.log("Now  Duplicate object", object2)







// Deep Copy->// both objects are treat differently
// const object2 =JSON.parse(JSON.stringify(object1))// 1st way
// // const object2 = structuredClone(object1)
// object2.age = 26;
// object2.city.pincode = 452011;
// console.log("No change in original object", object1)
// console.log("changes only in   Duplicate object", object2)



//Edge Cases
//case-:1 =>1st pass the empty object in the Object.assign() method 
// const object2 = Object.assign({},object1);//2nd way of shallow copy 
// // console.log("Duplicate object",object2)

// object2.age = 26;
// object2.city.pincode=452011;
// console.log("I made change by duplicate, orignal change ho gya hai", object1)
// console.log("Now  Duplicate object", object2)




//case-2: 
const object2 ={...object1};//2nd using spread
object2.age = 26;
object2.city.pincode = 452011;
console.log("I made change by duplicate, orignal change ho gya hai", object1)
console.log("Now  Duplicate object", object2)