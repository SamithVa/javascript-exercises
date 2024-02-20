const sumAll = function(a, b) {
    
    // check types of start and end
    if (typeof(a) !== 'number' || typeof(b) !== 'number'){
        return 'ERROR'
    }
    // check negativity 
    else if(a < 0 || b < 0)
        return 'ERROR'
    
    let sum = 0
    if (a < b){
        for(a; a <= b; a++){
            sum += a
        }
    }
    else{
        for(b; b <= a; b++){
            sum += b
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
