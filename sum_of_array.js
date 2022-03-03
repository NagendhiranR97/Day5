console.log("----------------3.Sum of all numbers in an array----------------------");

var sum = function(value){
    let add=0;
for(let i=0;i<value.length;i++){
    add +=value[i];
}
console.log(add);
};

sum([1,2,3,4,5,6,7,8,9,10])