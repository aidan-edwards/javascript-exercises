//that takes multiple args
//and an arr
//removes those args from that arr
const removeFromArray = function(arr, ...args) {
    let realArgs = Array.from(args)
    let output = [];
    arr.forEach((item) => {
        if(!args.includes(item)){
            output.push(item)
        }
    })


return output
}

// Do not edit below this line
module.exports = removeFromArray;
