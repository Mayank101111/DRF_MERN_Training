console.log("Khao maa kasam")


//prgoram
/*
####
####
####
####
*/


/*
for (let i = 0; i < 4; i++) {
    let ans = "";
    for (let j = 0; j < 4; j++) {
        ans += "0"
    }
    console.log(ans)
}

*/




// for (let i = 0; i < 5; i++) {
//     let ans = "";
//     let sp="";
//     for (let sp1 = 0; sp1 < i; sp1++) {
//         sp += " ";
//     }
//     for (let j = 0; j <5-i; j++) {
//         ans = ans+(5-i-j);
//     }
//     console.log(sp+ans)
// }

// Output 
/*    54321
//     4321
//      321
//       21
//        1
*/

/* 
    *
   ***
  *****
 *******
*********
*/


// for (let i = 1; i <= 4; i++) {
//     let ans = "";
//     let sp="";
//     for (let sp1 = 1; sp1 <= 5-i; sp1++) {
//         sp += " ";
//     }
//     for (let j = 1; j <=2*i-1; j++) {

//         ans += "+";
//     }
//     console.log(sp+ans)
// }

// for (let i = 1; i <= 4; i++) {
//      let ans = ""

//     for (let j = 1; j <=4; j++) {
//        if((i==1)||j==1||j==4||i==4)
//         ans += "+";
//     else{
//         ans+=" "
//     }
//     }
//     console.log(ans)
// }


for (let i = 1; i <= 4; i++) {
    let ans = "";
    let sp = "";
    for (let sp1 = 1; sp1 <= 5 - i; sp1++) {
        sp += " ";
    }
    let sp2 = "";

    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j == 1 || j == 2*i-1||i==1||i==4)
            ans += "+";
        else {
            // for (let k = 2; k < 2 * j-1; k++) {
            //     sp2 += "A"
            // }
            sp2=" ";
        
            ans += sp2
        }


    }

    console.log(sp + ans)
}

