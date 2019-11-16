// Concat()
const one = [1, 1, 1, 1];
const two = [2, 2, 2, 2];

const three = one.concat(two);

// Spread operator doing the concat job
const four = [...one, ...two];

// Though they provide the same result, it is not recommended to use the spread in this case, 
// as for a large data set it will slower as when compared to the native concat() method.
console.log("3", three); // [ 1, 1, 1, 1, 2, 2, 2, 2 ]
console.log("4", four); // [ 1, 1, 1, 1, 2, 2, 2, 2 ]


// When pusing an element into arr2, it also mutates arr1
let arr1 = ["a", "b", "c"];
let arr2 = arr1;

arr2.push("d");

console.log(arr1, arr2); // [ 'a', 'b', 'c', 'd' ] [ 'a', 'b', 'c', 'd' ]

// In this case, we can use spread operator
let arr3 = ["a", "b", "c"];
let arr4 = [...arr3];

arr4.push("d");

// By using the spread operator we made sure that the original array is not affected whenever we alter the new array.
console.log(arr3, arr4); // [ 'a', 'b', 'c' ] [ 'a', 'b', 'c', 'd' ]

let arr5 = ["a", "b"];
let arr6 = [arr5, "c"];
let arr7 = [...arr5, "c"];

console.log(arr6); // [ [ 'a', 'b' ], 'c' ]
console.log(arr7); // [ 'a', 'b', 'c' ]


let arr8 = [1,2,3,-1];
console.log(Math.min(1,2,3,-1)) // -1
console.log(Math.min(arr8)); // NaN
console.log(Math.min(...arr8)); // -1