// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

// > Leap years are years divisible by four (like 1984 and 2004).
// However, years divisible by 100 are not leap years (such as 1800 and 1900)
// unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
// (Yes, it's all pretty confusing)

//if it's divisible by 4 AND not divisible by 100 => leap year
//else if it's divisble by 100 && divisuble by 400 && divisible by 4 => leap year
//otherwise not a leap year


const leapYears = function(theYear) {

    if(theYear % 4 === 0 && theYear % 100 !== 0){
        return true
    }
    else if(theYear % 100 === 0 && theYear % 400 === 0 && theYear % 4 === 0){
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
