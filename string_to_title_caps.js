console.log("----------------2.Convert all the strings to title caps in a string array---------------------");

var cap = function(str){
if(str === null || str == '')
{
    return false;
}else{
    let strr = str.split(' ');
    for(let i=0;i<strr.length;i++){
   console.log(strr[i].charAt(0).toUpperCase()+strr[i].substr(1).toLowerCase());
    }
}
};

cap("full stack devleoper");
