// Question 2
// var target = -96
// var array = [2,3,55,6,67,78,23,5,67,78,43,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];
// var a,b,c,d,e;
// function findNumber(array){
// for(a=0;a<array.length-4;a++){
//     for(b=a+1;b<array.length-3;b++){
//         for(c=b+1;c<array.length-2;c++){
//             for(d=c+1;c<array.length-1;d++){
//                 for(e=d+1;d<array.length;d++){
//                     var flag=false;
//                     if(array[a]-array[b]-array[c]-array[d]-array[e] == target){
//                         console.log(array[a],"-",array[b],"-",array[c],"-",array[d],"-",array[e],"=",array[a]-array[b]-array[c]-array[d]-array[e]);
//                         flag=true;
//                     }
//                     // console.log(array[a],array[b],array[c],array[d],array[e])
//                 }
//             }
//         }
//     }
// }
// if(flag==false){
//     console.log("not Found!!");
// }
// }

// findNumber(array);




// Question 3
// var array2 = [2,3,55,6,67,78,23,5,67,78,43,67,78,43,67,34,6,74,7,45,23,45,78,89,34,23];
// var a,b;
// var target = 115;
// function findMulti(array2,target){
//     var flag=false;
//     for(a=0;a<array2.length-1;a++){
//         for(b=a+1;b<array2.length;b++){
//             if(array2[a]*array2[b]==target){
//                 console.log(array2[a],array2[b])
//                 flag=true;
//             }
//         }
//     }
//     if(flag==false){
//         console.log("NOT FOUND!!")
//     }
// }
// findMulti(array2,target)

// Q 3 OUTPUT
// if target = 236028
// PS C:\awdiz\Myntra> node test.js
// NOT FOUND!!

// if target 115
// PS C:\awdiz\Myntra> node test.js
// 23 5
// 5 23
// 5 23

// Question 4

// var array3 = [2, 3, 55, 6, 67, 78, 23, 5, 67, 78, 43, 67, 78, 43, 67, 34, 6, 74, 7, 45, 23, 45, 78, 89, 34, 23];
// var a;
// function sum(array3) {
//     for (a = 0; a < array3.length-1; a++) {
//         var no = array3[a];
//         if (no % 2 == 0) {
//             console.log(array3[a]);
//         }
//     }
// }

//  sum(array3);


// Q 4 OUTPUT
// PS C:\awdiz\Myntra> node test.js
// 2
// 6
// 78
// 78
// 78
// 34
// 6
// 74
// 78
// 34


// Question 5

var array3 = [2, 3, 55, 6, 67, 78, 23, 5, 67, 78, 43, 67, 78, 43, 67, 34, 6, 74, 7, 45, 23, 45, 78, 89, 34, 23];
var a;
function countOfOdd(array3) {
    for (a = 0; a < array3.length; a++) {
        var no1 = array3[a];
        //  var res = no1 % 2;
        if (no1 % 2 == 1) {
            console.log(array3[a])
            console.count();
        }
    }
}
countOfOdd(array3)