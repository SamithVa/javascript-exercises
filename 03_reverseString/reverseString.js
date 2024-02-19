const reverseString = function(str) {

    // split into an array
    let splitStr = str.split('')
    // reverse the order of array
    splitStr = splitStr.reverse()

    // join the array back into result string
    return splitStr.join('')
};

// Do not edit below this line
module.exports = reverseString;
