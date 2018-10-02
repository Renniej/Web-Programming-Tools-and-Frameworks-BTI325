
let privateCounter = 0;
/*
module.exports.increase = function(num){
    privateCounter += num;
    //privateCounter = privateCounter + num;
}

module.exports.decrease = function(num){
    privateCounter -= num;
    privateCounter = privateCounter <0 ? 0: privateCounter;
    
    /*
    if (privateCounter <0)
        { privateCounter = 0;}
    */ 
/*
}

module.exports.value = function(){
    return privateCounter;
}
*/
/*
var value = function(){
    return privateCounter;
}
module.exports.value = value;
*/
module.exports(function value(){
    return privateCounter;
});