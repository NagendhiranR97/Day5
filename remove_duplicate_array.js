console.log("----------------7.Remove duplicates from an array----------------------");


var arr = ["apple", "mango", 
        "apple", "orange", "mango", "mango"];
  
    function removeDuplicates(arr) {
        var unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique; 
    }
  
    console.log(removeDuplicates(arr));
