//  let str = "42"

//  let num = +str;

//  if(num%2== 0){
//     console.log("even")
//  } else{
//     console.log("odd")
//  }

//  let pass = "1234";

//  let passNum = +pass;

//  if(passNum === 1234){
//     console.log("Access Granted");
//  }else{
//     console.log("Access Denies")
//  }

// let str = "456";
// let num = +str;

// let sum = 0;
// while(num>0){
//     let digit = num % 10;
//     sum = sum + digit;
//     num =Math.floor(num/10)

// }
// console.log(sum)

// let num  = 1234;
// let reversed = ""

// const str = num + "";

// while(num>0){
//     let digit = num % 10;
//     reversed =reversed+ digit;
//     num = Math.floor(num/10)
// }

// console.log(reversed);

let str = "18";
let num = +str;

if (num % 3 == 0 && num % 5 == 0) {
  console.log("FizzBuzz");
} else if (num % 5 == 0) {
  console.log("Buzz");
} else {
    console.log("not by anyone")
}
