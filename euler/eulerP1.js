//This javascript function will find the sum of all the numbers below 1000 that are multiples of 3 or 5
//author: Rex

var findMultiplesOf = function (number){
    var sum =  0;
    for (var i = 0; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0 ){
           sum +=i; 
        }  
    };
    alert("Answer: " + sum);
};