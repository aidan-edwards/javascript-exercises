//that takes multiple args
//and an arr
//removes those args from that arr
const removeFromArray = function(arr, ...args) {
    const result = arr.filter(item => item != ...args);
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
