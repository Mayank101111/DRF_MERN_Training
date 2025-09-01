// //freeze method

// const obj = {
//     fname: "Mohan",
//     age: 90
// }
// console.log("Orginal object is",obj)

// // Object.freeze(obj);
// // obj.city="Jabalpur"// it will not add in object
// // obj.age=909;// it will not modify value in object
// // delete obj.fname;
// // console.log("after adding the property in object",obj)


// //Seal method only allow to modify and read properties

// Object.seal(obj);
// obj.city="Jabalpur"// it will not add in object
// obj.age=900979;// it will not modify value in object
// delete obj.fname;
// console.log("after adding the property in object",obj)



//Array destructuring 
// let arr = [[1, 2, 44], 67, 56756];
// const [one, two] = arr;
// console.log("Original array", arr)
// console.log("One=>", one, "Two=>", two)



//Object destructing
// let person = {
//     id: 101,
//     Fname: "JAGMOHAN",
//     Data: {
//         city: "INDORE"
//     }
// }
// const { id,Fname,Data}=person;
// // const {city}=Data;
// console.log("Id",id,"Name",Fname,"Data Object",Data,Data.city)



//Nested Object 




// Creating a complex object
// const library1 = {
//     name: "City Library",

//     // Symbol property (unique, cannot be accessed normally)
//     [Symbol("id")]: 101,

//     location1: {
//         city: "Mumbai",
//         pincode: 400001,
//         coordinates: {
//             lat: 18.9388,
//             lng: 72.8354
//         }
//     },



//     // Array of nested objects
//     books: [
//         { title: "JavaScript Deep Dive", author: "Kyle Simpson", available: true },
//         { title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: false }
//     ],

//     // Method
//     getAvailableBooks() {
//         return this.books.filter(book => book.available).map(book => book.title);
//     },

//     // Getter
//     get totalBooks() {
//         return this.books.length;
//     },

//     // Setter (to add a new book)
//     set addBook(newBook) {
//         if (newBook.title && newBook.author) {
//             this.books.push({ ...newBook, available: true });
//         }
//     },

//     // Computed property name
//     ["founded_" + new Date().getFullYear()]: "1995",

//     // Function as a property
//     describe: () => "A big library with lots of books"
// };

// const { location1 } = library1;
// console.log(location1)
// const { coordinates } = location1;
// console.log(coordinates)
// const { lat } = coordinates
// console.log(lat)




//for of loop is used for array and strings
// it gives more control like can use break continue
// let arr = [2, 122, 56, 7978, 7884, 556, 89];
// console.log(arr)


// for (value of arr) {
//     console.log("<=>", value)
// }

// //break use 
// for (value of arr) {
//     if (value === 56)
//         break;
//     console.log("----->", value)

// }


// //continue use 
// for (value of arr) {
//     if (value === 56)
//         continue;
//     console.log("<-----", value)

// }




//for in loop only applicable for objects
//cant provide facility of using break and continue
// const aadmi = {
//     height: "5.5789",
//     color: "Sawla",
//     loyal: "Bilkul Nhi hai",
//     age:27
// }

// for (value in aadmi) {
//     console.log(value, "=", aadmi[value])
// }


// for (value in aadmi) {
//     if (aadmi[value] === 27)
//         break;
//     console.log(value, "=", aadmi[value])
// }








