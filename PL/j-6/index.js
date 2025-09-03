// let obj ={
//     name: "Pradeep",
//     age:25,
//     weight:85,
//     height:"6th 1in",
//     greet: function(){
//         console.log("hello jee kaise ho saare")
//     }
// };

// // for(let key in obj){
// //     console.log(key," ",obj[key])
// // }

// let arr = [10,20,30,40]

// for( let value of arr){
//     console.log(value)
// }

// // // // console.log(obj)
// // // // obj.greet()

// // // // let obj2 = obj;

// // // //  creation of array

// // // let arr = [1,2,3,4,5];

// // // // array constructor
// // let brr =  new Array('love',1,true);
// // // console.log(brr)

// // brr.push("itsme")
// // // brr.pop()
// // // brr.shift()
// // // brr.unshift("klkl")

// // // brr.slice(2,4)
// // brr.splice(1,0,"kunal")

// // console.log(brr)


// // // // console.log(typeof(arr))
// // // // console.log(typeof(brr))

// // let arr = [10,20,30,11,21,44,51];

// // let array = arr.map((number)=>{
// //     return number*number
// // })

// // console.log(array)

// // arr.map((number,index)=>{
// //     console.log(number+1);
// //     console.log(index);
// // })

// // let  ansns = arr.filter((number)=>{
// //     if(number%2 ===0){
// //         return true
// //     }else{
// //         return false;
// //     }
// // })

// // console.log(ansns);


// // let arr = [1,2,'love','kunal',null];

// // let ans = arr.filter((value)=>{
// //     if(typeof(value)=== 'string')
// //         return true;
// //     else
// //         return false
// // })

// // console.log(ans)

// // let arr = [10,20,30,40,50];

// // const arrsum = arr.reduce((acc,curr)=>{
// //     return acc + curr
// // },5)

// // console.log(arrsum)

// // let arr = [9,1,7,4,2,8]
// // arr.sort();

// // console.log(arr);
// // let arr = [10,20,30]

// // arr.forEach((value, index)=>{
// //     console.log("Number", value,"Index:",index)
// // })


let arr = [10,20,30,40,50]

function getsum(arr){
    let len = arr.length;
    let sum =0;
    for( let index=0; index<len; index++){
        sum = sum +arr[0]
    }
    return sum;
}

let totalSum = getsum(arr)
console.log(totalSum);