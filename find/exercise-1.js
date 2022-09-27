/*
Exercise 1: Find the index:

You are going to use '.findIndex' array method to find
the index of the value we want.

You are given an array of values ('values'),

Use the '.findIndex' array to find the value of 5 and
set the result of this to the supplied 'foundIndex' variable.
*/

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find the value of 5:
const foundIndex = values.find((soughtIndex, index) => {
    
    if (index === 5) {
        return true;
    } 
    console.log("The value of 5 has index of: ", index);
}); 

const valuesTimesOne = values.reduce((total, value)=> {
    total += value; 
    return total;
}, 0);

const valuesTimesTwo = (valuesTimesOne*2)
console.log(valuesTimesTwo);
