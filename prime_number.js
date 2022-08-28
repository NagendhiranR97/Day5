console.log("----------------4.Return all the prime numbers in an array---------------------");

var prime = function(number){
    for (let i = 0; i < number.length; i++) {
        if(number[i] % i == 0){
          console.log("Not Prime Number:"+ number[i]);
        }else{
            console.log("Prime Number:"+ number[i]);
        }
      }

};

prime([1,3,45,33,656,43,23,5,8,9]);
