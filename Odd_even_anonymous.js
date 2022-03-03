console.log("----------------1.Print odd numbers in an array----------------------");

var odd = function(number){
for(let i=0;i<number.length;i++){
    if(number[i]%2 != 0){
        console.log("ODDnumber: "+number[i])
    }else{
        console.log("EVENnumber: "+number[i]);
    }
}
};

odd([1,2,3,4,5,6,7,9,0,34,344,443,676]);