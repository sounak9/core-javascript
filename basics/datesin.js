let myDate = new Date();
// console.log(myDate.toString()); // Mon Sep 02 2024 08:03:18 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());// 2024-09-02T02:33:18.738Z
// console.log(myDate.toDateString()); // Mon Sep 02 2024
//console.log(myDate.toLocaleDateString()); // 2/9/2024
//console.log(typeof myDate); // object

let myCreatedDate = new Date(2024, 0, 24);
console.log(myCreatedDate.toDateString()); // Wed Jan 24 2024 here month start from 0 and ends in  11
