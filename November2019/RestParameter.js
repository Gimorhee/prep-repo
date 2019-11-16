// Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function.

// Without rest parameter 
function fun(a, b){ 
    return a + b; 
} 
console.log(fun(1, 2)); // 3 
console.log(fun(1, 2, 3, 4, 5)); // 3

// es6 rest parameter
function add(...parameters) {
    let sum = 0;

    for (let i of parameters) {
        sum += i;
    }
    // for (let i = 0 ; i < parameters.length ; i++) {
    //     sum += parameters[i]
    // }

    return sum;
}
console.log(add(1,2)); //3 
console.log(add(1,2,3)); //6 
console.log(add(1,2,3,4,5)); //15 


// non-sense code -> Note: The rest parameter have to be the last argument, as its job is to collect all the remaining arguments into an array. 
function fun(a,...b,c){ 
    //code 
    return; 
} 


// rest with function and other arguments 
function test(a,b,...c){ 
    console.log(`${a} ${b}`); //Mukul Latiyan 
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ] 
    console.log(c[0]); //Lionel 
    console.log(c.length); //3 
    console.log(c.indexOf('Messi')); //1 
} 
test('Mukul','Latiyan','Lionel','Messi','Barcelona');