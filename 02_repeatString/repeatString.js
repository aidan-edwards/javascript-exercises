const repeatString = function(string, num) {
    let finalString = ""
    if (num < 0){
        return "ERROR"
    }
    else{
    for(let i = 0; i < num; i++){
        finalString += string
    }
    return finalString
}
};

//create arr to store output

// Do not edit below this line
module.exports = repeatString;
