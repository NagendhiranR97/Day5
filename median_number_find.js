console.log("----------------6.Return median of two sorted arrays of the same size----------------------");

((arr1,arr2) => {
    n1 = Math.round(arr1.length/2);
    console.log(Math.round(n1));
    var median = ((arr1[n1-1])+(arr2[n1-1]))/2;
    console.log(median);
  
})([1, 12, 15, 26, 38],[2, 13, 17, 30, 45]);
