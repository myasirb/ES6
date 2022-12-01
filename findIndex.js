/*
    * Pollyfill for findIndex()
    * FindIndex method is used to get first index in an array that matches the condition specified.
*/
//Test - 1
console.log("Built in findIndex() : " + [10,12,13,56,18].findIndex(age => age > 18));

Array.prototype.findIndex = null;
if(!Array.prototype.findIndex){
    Array.prototype.findIndex = function(callback){
        for(let index in this){
            if(callback(this[index])){
                return index;
            }
        }
        return -1;
    }
}

// Test - 2
time = 11;
times = [1,3,7,5,2,8.5,8,9,8,11];
console.log("-1 Example Test for findindex() : " + times.findIndex(value => value > time));

// Test - 3
time = 8;
console.log("Exist Example Test for findindex() : " + times.findIndex(value => value > time));