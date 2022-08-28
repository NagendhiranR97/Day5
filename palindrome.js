console.log("----------------5.Return all the palindromes in an array----------------------");


let palindromeArray = (arr, start = 0, end = arr.length - 1) => {
    //if array has only element
    if(start >= end){
      console.log('its palindrome');
    }
    
    //if start is equal to end 
    if(arr[start] === arr[end]){
      //call the same function
      return palindromeArray(arr, start + 1, end - 1);
    }else{
      //else not palindrome
      console.log('its not palindrome');
    }
}

palindromeArray([1,2,2,1]);
