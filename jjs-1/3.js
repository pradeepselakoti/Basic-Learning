// let str = "9787"

// let num = +str;
// let digit = str.split("");

// let largest = +digit[0];

// for(let i =0; i<digit.length; i++){
//     let current = +digit[i];
//     if(current> largest){
//         largest = current;
//     }
// }

// console.log(largest)

// let num = "2444424213";

// let digit = num.split("")
// let count=0;

// for(let i =0; i<digit.length; i++){
//     let even = +digit[i];
//     if(even%2==0){
//         count++
//     }
// }
// console.log(count)


// let num = 121;

// let original = num 
// let reversed = 0;

// while(num>0){
//     let digit = num%10;
//     reversed = reversed*10 + digit;
//     num = Math.floor(num/10)
// }

// console.log(original===reversed)


// let arr = ["10", "20", "30"]


// sum=0;
// for(let i=0;i<arr.length; i++){
//     sum =sum + (+arr[i]);

// }
// console.log(sum)

// function multiplyDigits(num){

//     let mul=1;
//     while(num>0){
//         let digit = num %10;
//         mul= mul*digit;
//         num= Math.floor(num/10)
//     }

//     console.log(mul)  
// }

// multiplyDigits(123)



let str = "120506070"
let result = " ";

for(let i=0; i<str.length; i++){
    if(str[i] !== "0"){
        result = result+ str[i]
    }
}

console.log(result)