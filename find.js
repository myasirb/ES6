/*
    * Pollyfill for find()
    * Find method is used to get first value in an array that matches the condition specified
*/
//Test - 1
console.log("Built in find() : " + [10,12,13,56,18].find(age => age > 18));

Array.prototype.find = null;
if(!Array.prototype.find){
    Array.prototype.find = function(callback){
        for(let index in this){
            if(callback(this[index])){
                return this[index];
            }
        }
        return undefined;
    }
}

// Test - 2
let time = 11;
let times = [1,3,7,5,2,8.5,8,9,8,11];
console.log("Undefined Example Test for find() : " + times.find(value => value > time));

// Test - 3
time = 8;
console.log("Exist Example Test for find() : " + times.find(value => value > time));