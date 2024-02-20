const removeFromArray = function() {
    let arr = arguments[0]
    for(let i = 1; i < arguments.length; i++){
        for(let j = 0; j < arr.length; j++){
            // loop through array to see if there are duplicates
            index = arr.indexOf(arguments[i])
            if (index !== -1){
                arr.splice(index,1) // remove a element index 
            }
            else{
                break
            }
        }
    } 
    return arr
}

// Do not edit below this line
module.exports = removeFromArray;
